Returns a service with the class name requested. When called with the name of a service (such as `Debris`) it will return the instance of that service. If the service does not yet exist it will be created and the new service is returned. This is the only way to create some services, and can also be used for services that have unusual names, e.g. RunService's name is "Run Service".

## Notes

* This function will return nil if the className parameter is an existing class, but the class is not a service.

* If you attempt to fetch a service that is present under another Object, an error will be thrown stating that the "singleton serviceName already exists".