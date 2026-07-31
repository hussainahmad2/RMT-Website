import React, { useRef } from "react";
import { Paperclip, Upload, X, FileText } from "lucide-react";
import {
  ACCEPTED_FILE_TYPES,
  MAX_ATTACHMENTS,
  MAX_FILE_SIZE_BYTES,
  validateAttachmentFiles,
} from "@/lib/email";

interface FileUploadFieldProps {
  files: File[];
  onChange: (files: File[]) => void;
  label?: string;
  hint?: string;
  error?: string | null;
  onError?: (message: string | null) => void;
  required?: boolean;
  testId?: string;
}

function formatSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  return `${(bytes / 1024).toFixed(0)} KB`;
}

export function FileUploadField({
  files,
  onChange,
  label = "Attachments",
  hint,
  error,
  onError,
  required = false,
  testId = "input-file-upload",
}: FileUploadFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const addFiles = (incoming: FileList | null) => {
    if (!incoming?.length) return;
    const next = [...files, ...Array.from(incoming)].slice(0, MAX_ATTACHMENTS);
    const validationError = validateAttachmentFiles(next);
    if (validationError) {
      onError?.(validationError);
      return;
    }
    onError?.(null);
    onChange(next);
    if (inputRef.current) inputRef.current.value = "";
  };

  const removeFile = (index: number) => {
    const next = files.filter((_, i) => i !== index);
    onError?.(null);
    onChange(next);
  };

  return (
    <div>
      <label className="block text-sm font-medium text-foreground mb-1.5">
        <Paperclip className="inline w-3.5 h-3.5 mr-1 text-muted-foreground" />
        {label}
        {required ? " *" : ""}
      </label>
      <p className="text-xs text-muted-foreground mb-2">
        {hint ||
          `Documents, images, or other files — up to ${MAX_ATTACHMENTS} files, ${Math.round(MAX_FILE_SIZE_BYTES / 1024)} KB each.`}
      </p>

      <div
        className="rounded-xl border border-dashed border-border bg-muted/30 px-4 py-5 text-center hover:border-primary/40 hover:bg-primary/5 transition-colors cursor-pointer"
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        onDrop={(e) => {
          e.preventDefault();
          e.stopPropagation();
          addFiles(e.dataTransfer.files);
        }}
      >
        <Upload className="w-5 h-5 text-muted-foreground mx-auto mb-2" />
        <p className="text-sm text-foreground font-medium">Click to upload or drag and drop</p>
        <p className="text-xs text-muted-foreground mt-1">
          PDF, Word, images, spreadsheets, ZIP
        </p>
        <input
          ref={inputRef}
          type="file"
          multiple
          accept={ACCEPTED_FILE_TYPES}
          className="hidden"
          data-testid={testId}
          onChange={(e) => addFiles(e.target.files)}
        />
      </div>

      {files.length > 0 && (
        <ul className="mt-3 space-y-2">
          {files.map((file, index) => (
            <li
              key={`${file.name}-${file.size}-${index}`}
              className="flex items-center gap-3 rounded-lg border border-border bg-card px-3 py-2"
            >
              <FileText className="w-4 h-4 text-primary shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="text-sm text-foreground truncate">{file.name}</p>
                <p className="text-xs text-muted-foreground">{formatSize(file.size)}</p>
              </div>
              <button
                type="button"
                onClick={() => removeFile(index)}
                className="w-7 h-7 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                aria-label={`Remove ${file.name}`}
              >
                <X className="w-4 h-4" />
              </button>
            </li>
          ))}
        </ul>
      )}

      {error && (
        <p className="text-destructive text-xs mt-2">{error}</p>
      )}
    </div>
  );
}
