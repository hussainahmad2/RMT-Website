# Team photos (source)

```
Team/
  c-level/
  business-marketing-unit/
  rd-wing/
    electromechanical-department/
    biomaterials-department/
  software-department/
    wajahat.webp, istafa.webp, umer.webp, amir.webp
```

After updating images:

```powershell
Copy-Item -Force Team\c-level\*.webp public\team\c-level\
Copy-Item -Force Team\business-marketing-unit\*.webp public\team\business-marketing-unit\
Copy-Item -Force Team\rd-wing\electromechanical-department\*.webp public\team\rd-wing\electromechanical-department\
Copy-Item -Force Team\rd-wing\biomaterials-department\*.webp public\team\rd-wing\biomaterials-department\
Copy-Item -Force Team\software-department\*.webp public\team\software-department\
```
