---
publish: true
created: "[[2022-05-03]]"
modified: 2026-01-12T22:38:52.783+02:00
published: "[[2022-05-03]]"
cssclasses: ""
parent: "[[Kubernetes]]"
state:
  - evergreen
date: "[[2022-05-03]]"
---

# Script to fix it

All you have to do is replace `RESPONSIBLE_NAMESPACE_HERE` with your namespace and it will be deleted
~~~bash
(
NAMESPACE=firefly
kubectl proxy &
kubectl get namespace $NAMESPACE -o json |jq '.spec = {"finalizers":[]}' >temp.json
curl -k -H "Content-Type: application/json" -X PUT --data-binary @temp.json 127.0.0.1:8001/api/v1/namespaces/$NAMESPACE/finalize
)
~~~
