things learnt
- k8s (pods, deployments, namespaces, services, replicasets)
- k8s ingress
- nginx conf
- building and deploying docker images to use in k8s 


request hits the loadbalancer external IP address and hits the nginx reverse proxy (ingress) which reverse proxies it to frontend or backend depending on where the request is coming from
DB is initialized into kube itself


