import { Link } from "wouter";
import { AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PageContainer } from "@/components/layout/PageContainer";
import { useSEO } from "@/lib/seo";

export default function NotFound() {
  useSEO({
    title: "Page Not Found",
    description: "The page you are looking for does not exist on RMT Medical Technologies.",
    noIndex: true,
  });
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background pt-20">
      <PageContainer className="flex justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6">
            <div className="flex mb-4 gap-2">
              <AlertCircle className="h-8 w-8 text-destructive" />
              <h1 className="text-2xl font-bold text-foreground">404 Page Not Found</h1>
            </div>

            <p className="mt-4 text-sm text-muted-foreground">
              The page you are looking for does not exist or has been moved.
            </p>

            <Button asChild className="mt-6">
              <Link href="/">Back to Home</Link>
            </Button>
          </CardContent>
        </Card>
      </PageContainer>
    </div>
  );
}
