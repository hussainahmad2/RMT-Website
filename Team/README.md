# Team photos (source)

```
Team/
  c-level/
  business-marketing-unit/
  rd-wing/
    electromechanical-department/
    biomaterials-department/
    microbiology-laboratory/
      hamza.jpg, ali.jpg
  software-department/
  production-wing/
  regulatory-department/
  quality-control-wing/
  supply-chain-wing/
    mir.jpg, fahad.jpg
  finance-department/
    farman.jpg, aneel.jpg
  hr-admin-wing/
    sonia.webp, asad.webp
```

After updating images:

```powershell
Copy-Item -Force Team\c-level\*.webp public\team\c-level\
Copy-Item -Force Team\business-marketing-unit\*.webp public\team\business-marketing-unit\
Copy-Item -Force Team\rd-wing\microbiology-laboratory\* public\team\rd-wing\microbiology-laboratory\
Copy-Item -Force Team\rd-wing\electromechanical-department\*.webp public\team\rd-wing\electromechanical-department\
Copy-Item -Force Team\rd-wing\biomaterials-department\*.webp public\team\rd-wing\biomaterials-department\
Copy-Item -Force Team\software-department\*.webp public\team\software-department\
Copy-Item -Force Team\production-wing\*.webp public\team\production-wing\
Copy-Item -Force Team\regulatory-department\*.webp public\team\regulatory-department\
Copy-Item -Force Team\quality-control-wing\*.webp public\team\quality-control-wing\
Copy-Item -Force Team\supply-chain-wing\* public\team\supply-chain-wing\
Copy-Item -Force Team\finance-department\* public\team\finance-department\
Copy-Item -Force Team\hr-admin-wing\* public\team\hr-admin-wing\
```
