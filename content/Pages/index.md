An object which is essentially a table of pages, each of which is a sorted list of the key/value pairs.

When each page contains a list of multiple items, this iterator function may be handy:

```lua
function iterPageItems(pages)
	return coroutine.wrap(function()
		local pagenum = 1
		while true do
			for _, item in ipairs(pages:GetCurrentPage()) do
				coroutine.yield(item, pagenum)
			end
			if pages.IsFinished then
				break
			end
			pages:AdvanceToNextPageAsync()
			pagenum = pagenum + 1
		end
	end)
end
```

Which can be used as

```lua
for item, pageNo in iterPageItems(myPageObject) do
	-- look at item. Pages will advance automatically
end
```
