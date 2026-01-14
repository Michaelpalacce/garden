---
publish: true
aliases:
  - Kubernetes - Pod Topology Spread Constraints
  - Kubernetes - TSC
description: How to distribute where your apps go based on external factors like geo location
created: "[[2025-05-26]]"
modified: 2026-01-14T11:23:48.984+02:00
published: "[[2025-05-26]]"
cssclasses: ""
parent: "[[Kubernetes]]"
state:
  - tree
date: "[[2025-05-26]]"
relates:
  - "[[Cassandra - Partitioning]]"
links:
  - https://kubernetes.io/docs/concepts/scheduling-eviction/topology-spread-constraints/
---

# Respecting Node Affinity Or anti affinity

This can be **controlled with** `nodeAffinityPolicy: Honor`. When Honoring, both the constraints and affinity rules are respected.

```yaml
kind: Pod
apiVersion: v1
metadata:
  name: mypod
  labels:
    foo: bar
spec:
  topologySpreadConstraints:
  - maxSkew: 1
	 nodeAffinityPolicy: Honor # Honoring nodeAffinity
    topologyKey: zone
    whenUnsatisfiable: DoNotSchedule
    labelSelector:
      matchLabels:
        foo: bar
  affinity:
    nodeAffinity:
      requiredDuringSchedulingIgnoredDuringExecution:
        nodeSelectorTerms:
        - matchExpressions:
          - key: zone
            operator: NotIn
            values:
            - zoneC
  containers:
  - name: pause
    image: registry.k8s.io/pause:3.1
```

# Lables

Your nodes need to be labeled with ideally:

- `topology.kubernetes.io/zone`
- `topology.kubernetes.io/region`

# Example

```yaml
---
apiVersion: v1
kind: Pod
metadata:
  name: example-pod
spec:
  # Configure a topology spread constraint
  topologySpreadConstraints:
    - maxSkew: <integer>
      minDomains: <integer> # optional
      topologyKey: <string>
      whenUnsatisfiable: <string>
      labelSelector: <object>
      matchLabelKeys: <list> # optional; beta since v1.27
      nodeAffinityPolicy: [Honor|Ignore] # optional; beta since v1.26
      nodeTaintsPolicy: [Honor|Ignore] # optional; beta since v1.26
  ### other Pod fields go here
```

Or filled:

```yaml
    topologySpreadConstraints:
        - maxSkew: 1
          topologyKey: topology.kubernetes.io/region
          whenUnsatisfiable: DoNotSchedule
          labelSelector:
            matchLabels:
              app: foo
          matchLabelKeys:
            - pod-template-hash
```

Multiple Constraints:

```yaml
kind: Pod
apiVersion: v1
metadata:
  name: mypod
  labels:
    foo: bar
spec:
  topologySpreadConstraints:
  - maxSkew: 1
    topologyKey: zone
    whenUnsatisfiable: DoNotSchedule
    labelSelector:
      matchLabels:
        foo: bar
  - maxSkew: 1
    topologyKey: node
    whenUnsatisfiable: DoNotSchedule
    labelSelector:
      matchLabels:
        foo: bar
  containers:
  - name: pause
    image: registry.k8s.io/pause:3.1
```

Another example

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
spec:
  replicas: 6 # Or any number you need, ideally a multiple of your AZs
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      topologySpreadConstraints:
        - maxSkew: 1 # Max difference in count between any two zones
          topologyKey: topology.kubernetes.io/zone # The label Kubernetes uses for AZs
          whenUnsatisfiable: ScheduleAnyway # Or DoNotSchedule if strict
          labelSelector:
            matchLabels:
              app: my-app
      containers:
        - name: my-container
          image: nginx
```
