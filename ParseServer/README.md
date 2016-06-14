## Running an Impart server

Ensure that Docker and Docker-Compose are installed on your system.
Run:
```bash
sh run.sh
```

Wait until the Parse dashboard is available at http://192.168.99.100:4040/ (NB: this is the IP address of your docker-machine. If you are running Docker natively, this is just http://localhost:4040). Once the UX is available, run:
```bash
sh initialize.sh
```

This will configure the Parse server database with the appropriate fields, so that requests from the application code don't fall flat looking for Classes that don't exist.
