# Technical Gotchas

## computer:// Link Path Issue (CRITICAL)

**Problem:** Max's workspace folder is named `um-clients` (with a space). When generating `computer://` preview links, the space (whether raw or URL-encoded as `%20`) breaks Claude's file preview system. The user cannot open files.

**Wrong:**
```
computer:///sessions/beautiful-awesome-galileo/mnt/maxwellfinn.github%202.io/fulfil-quiz/index.html
```

**Failed attempt 1:** Symlinks — `ln -sf` from session root. Still fails with "Failed to load local file."

**Working solution:** Physically COPY files to the session root (no space in path):
```bash
cp -r "/sessions/{session}/mnt/um-clients/{project}" /sessions/{session}/{project}
```

Then use the copied path for computer:// links:
```
computer:///sessions/beautiful-awesome-galileo/fulfil-quiz/index.html
```

The workspace copy at `mnt/um-clients/` is the persistent version. The session root copy is purely for Claude preview.

**When to apply:** Every time files are created in the workspace and need to be shared via computer:// links.

**Date discovered:** February 9, 2026
