---
publish: true
aliases:
  - K8S
description: Distributed, fault-tolerant, highly available customizable extensible platform for managing container workflows.
created: "[[2022-05-02]]"
modified: 2026-01-28T11:14:16.955+02:00
published: "[[2022-05-02]]"
cssclasses: ""
parent: "[[DevOps Index|DevOps]]"
state:
  - evergreen
  - core
opposes:
  - "[[Virtualization]]"
relates:
  - "[[Containers]]"
  - "[[Docker Compose]]"
date: "[[2022-05-02]]"
---

Kubernetes is a distributed, fault-tolerant, highly-available, customizable, extensible platform for managing container ([[Containers]]) workflows. 

# Map Of Content

- Flavors
	- [[K3S\|K3S]] - a lightweight K8S distribution
	- [[Tanzu\|Tanzu]] - VMware kubernetes implementation
	- [[Talos Linux\|Talos Linux]]
	- [[OpenShift]]
	- [[kind]]
- CSI - Container Storage Interface
	- [[Longhorn\|Longhorn]] Distributed hyper-converged storage solution by the people behind K3S
- CNIs - Container Networking Interface
	- [[Calico Cni\|Calico]] - Calico is an amazing CNI that has all the features one might need with a bunch of flexibility.
- [[GitOps]] 
	- [[FluxCD2\|FluxCD2]] | [[ArgoCD]]
- Backup Solutions
	- [[Velero\|Velero]]
- [[Kubernetes - Operator\|Operator]] - Software operator for managing [[Statefull]] applications 
- Tools
	- [[kubectl\|kubectl]] - Kubectl is used to administer the Kubernetes cluster(s)
	- [[Helm\|Helm]] - used to package and deploy applications
	- [[kube-vip\|kube-vip]]
	- [[Kyverno]]
- Manifests
	- [[Kubernetes - Generation Field]]
	- [[Kubernetes - Labels, Annotations, Selectors]]
	- [[Kubernetes - Owners And Dependents]]
- Lifecycle
	- [[Kubernetes - Ready Status]]
- Advanced
	- [[Kubernetes - Concurrency Control And Consistency]]
	- [[Kubernetes - Deletion]]
	- [[Kubernetes - Multi Cluster Communication]]
	- [[ContainerD - Manually Importing Images Into Kubernetes]]
- Networking
	- [[Kubernetes - Ingress Nginx]]
	- [[Kubernetes - Gateway API]]
	- [[Kubernetes - EndpointSlices]]
	- [[Kubernetes - Service]]
	- [[Kubernetes - Topology Aware Routing]]
	- [[Konnectivity]]
- Security
	- [[Kubernetes - Allow Anonymous Access To Specific Endpoints]]
	- [[Kubernetes - Security Context]]
	- [[Kubernetes - Certificates And Certificate Signing Requests]]
	- [[Kubernetes - Service Account]]
- Architecture
	- [[etcd]]
	- [[Kubernetes - kube-controller-manager]]
	- [[Kubernetes - cloud-controller manager]]
	- [[Kubernetes - kube-scheduler]]
	- [[Kubernetes - kube-apiserver]]
	- [[Kubernetes - kube-proxy]]
- Placement
	- [[Kubernetes - Topology Spread Constraints\|Topology Spread Constraints]]
- SRE
	- [[Kubernetes - Requests And Limits\|Requests And Limits]]
	- [[Kubernetes - Horizontal Pod Autoscaler\|Horizontal Pod Autoscaler]]
	- [[Kubernetes - Vertical Pod Autoscaler\|Vertical Pod Autoscaler]]
	- [[Kubernetes - Node Autoscaler\|Node Autoscaler]]
	- [[Kubernetes - High Availability]]
	- [[Kubernetes - Observability]]
- [[Kubernetes - Admission Controllers]]
- [[Kubernetes - Downard API]]
- Tips And Tricks
	- [[Kubernetes - Delete All Empty Replicasets]]
	- [[Kubernetes - Get Logs Of All Containers In Namespace]]

# Components Map Of Content

- Compute
	- [[Kubernetes - Node\|Node]]
- Administration
	- [[Kubernetes - PriorityClass]]
	- [[Kubernetes - Pod Disruption Budget]]
- RBAC
	- [[Kubernetes - RoleBinding\|RoleBindings]]
	- [[Kubernetes - ClusterRoleBinding\|ClusterRoleBindings]]
- [[Kubernetes - ConfigMap\|ConfigMap]]
- [[Kubernetes - Secret\|Secrets]]
- [[Kubernetes - CRD\|CRD]]
- [[Kubernetes - Finalizer]]
- Workload
	- [[Kubernetes - Pod]]
	- [[Kubernetes - Deployment]]
	- [[Kubernetes - Daemonset]]
	- [[Kubernetes - Statefulset]]
- [[Kubernetes - Namespace]]

# Troubleshooting

- High CPU
	- [[Kubernetes - High CPU orphaned pods]] - Sometimes some pods cannot be cleaned up, so they need a bit of help
- General
	- [[Kubernetes - Namespace Stuck In Terminating]] - Happens sometimes if you force delete resources or delete them too fast.
	- [[Kuberentes - The Server Has Asked For The Client To Provide Credentials]]
	- [[Kubernetes - You must be logged in to the server (Unauthorized)]]
- PVC
	- [[Kubernetes - volume attachment is being deleted]]
- Networking
	- [[Kubernetes - Networking Problems]]

