docker build -f Dockerfile.backend -t algiro/sfc-menu-backend:latest .
docker build -f Dockerfile -t algiro/sfc-menu-frontend:latest .
docker push algiro/sfc-menu-backend:latest 
docker push algiro/sfc-menu-frontend:latest 
