This function checks if a path is blocked starting at the waypoint indicated by **start**.

It returns the first waypoint of occlusion if blocked, -1 if not. it returns an error if **start** is less than 0 or greater than the number of waypoints in the `Path`.