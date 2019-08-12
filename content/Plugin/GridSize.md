Returns the grid size the user has set in studio under the Model tab. This can be 1, 0.2 or 0.01, but has rounding errors.

The 1/5th option should return 0.2, but could return 0.20000000298023 instead. This code can be used to get the real gridsize:

```lua
local gridsize = plugin.GridSize
if math.abs(gridsize-0.2) < 0.005 then -- Check if the gridsize is between 0.195 and 0.205
	gridsize = 0.2
elseif math.abs(gridsize-0.01) < 0.005 then -- Between 0.005 and 0.015
	gridsize = 0.01
else -- Assume it's 1
	gridsize = 1
end
```
