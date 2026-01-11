---
{"publish":true,"aliases":["Non-Functional Requirements","Functional Requirements"],"created":"[[2022-11-15]]","modified":"2026-01-11T15:21:13.116+02:00","published":"[[2022-11-15]]","cssclasses":"","parent":"[[Software Architect]]","state":["evergreen"],"date":"[[2022-11-15]]","links":["https://www.altexsoft.com/blog/business/functional-and-non-functional-requirements-specification-and-types/"]}
---

![[Assets/Pasted image 20221115093147.png]]

# Functional Requirements 

Product features or functions that developers must implement. They describe system behavior under specific conditions.

It is important that these are cleared out before development starts for both the developers and the stakeholders. ^123

Example:
- `The system sends an approval request after the user enters personal information.`
- `The system sends a confirmation email when a new user account is created.`

# Non-Functional Requirements 

- Not related to the system functionality, rather define how the system should perform.
- Non Functional requirements define the quality attributes or characteristics that a software solution should have rather than specific use cases/behaviours or functionalities.
- Describe how the system should behave, not what it should do.

Example:
- `The system should handle 10 million concurrent users.`
- `The website should load in less than 1 second.`

## Example of Non-Functional Requirements

1. **Performance**:
    - Response time: The system must respond to user actions within 2 seconds.
    - Throughput: The system should support 1000 concurrent users.
    - Scalability: The system should scale to accommodate a 50% increase in user load.
2. **Reliability**:
    - Availability: The system should be available 99.9% of the time.
    - Fault tolerance: The system should continue to operate in the event of hardware or software failures.
    - Disaster recovery: The system should have a backup and recovery plan in case of catastrophic failures.
3. **Security**:
    - Authentication: Users must authenticate using a username and password.
    - Authorization: Access to sensitive data should be restricted based on user roles and permissions.
    - Data encryption: All sensitive data must be encrypted both in transit and at rest.
4. **Usability**:
    - User interface consistency: The user interface should have a consistent look and feel across all modules.
    - Accessibility: The system should be accessible to users with disabilities.
    - Learnability: The system should be easy for new users to learn and use.
5. **Scalability**:
    - Horizontal scalability: The system should be able to scale out by adding more instances to handle increased load.
    - Vertical scalability: The system should be able to scale up by upgrading hardware to handle increased load.
6. **Maintainability**:
    - Code maintainability: The codebase should be well-organized and documented to facilitate maintenance and future enhancements.
    - Modifiability: The system architecture should allow for easy modifications without impacting other components.
    - [[Testability]]: The system should be designed to facilitate automated testing.
7. **Compatibility**:
    - Cross-browser compatibility: The system should work correctly on popular web browsers such as Chrome, Firefox, and Safari.
    - Platform compatibility: The system should run on different operating systems such as Windows, Linux, and macOS.
    - Integration compatibility: The system should be able to integrate with other systems and third-party services.
8. **Regulatory**:
    - Compliance: The system must comply with relevant regulations and industry standards such as GDPR, HIPAA, or PCI DSS.
    - Data retention: The system should adhere to data retention policies and guidelines.
9. **Robustness**:
    - Error handling: The system should gracefully handle unexpected errors and failures without crashing or losing data integrity.
    - Recovery: The system should be able to recover from failures automatically or with minimal manual intervention.
    - [[Graceful Degradation]]: In case of high load or failure, the system should degrade functionality gracefully to ensure essential services remain available.
10. **Load**:
    - Load balancing: The system should distribute incoming requests evenly across multiple servers to ensure optimal performance and resource utilization.
    - Stress testing: The system should be tested under heavy loads to determine its performance and scalability limits.
    - Capacity planning: The system should have sufficient capacity to handle expected peak loads without degradation of performance.
11. **Configurability**:
    - Parameterization: The system should allow key parameters and settings to be easily configured without requiring code changes.
    - Dynamic configuration: Configuration changes should take effect immediately without requiring a system restart.
    - Versioning: Configuration changes should be versioned and auditable to track changes and roll back if necessary.
12. **[[Testability]]**:
    - Automation: The system should be designed for automated testing, with well-defined interfaces and testable components.
    - Mocking: The system should support mocking of external dependencies to facilitate isolated unit testing.
    - Test coverage: The system should have comprehensive test coverage to ensure all critical functionality is tested thoroughly.
13. **Operability**:
    - Logging: The system should generate detailed logs for monitoring, troubleshooting, and auditing purposes.
    - Health checks: The system should expose endpoints or interfaces for monitoring its health and status.
    - [[Failure Recovery]]: The system should have mechanisms in place to detect and recover from common failures automatically.
14. **Monitorability**:
    - Metrics: The system should expose key performance metrics and telemetry data for monitoring and analysis.
    - Alerting: The system should generate alerts based on predefined thresholds or anomalies to notify administrators of potential issues.
    - Visualization: The system should provide dashboards or visualizations to help administrators monitor system health and performance in real-time.