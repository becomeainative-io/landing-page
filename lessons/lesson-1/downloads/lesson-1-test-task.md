# Lesson 01 test task: prove your workbench

## Before starting the test task

- You read the theory in `lesson-1.pdf`.
- You completed the MCP setup in `lesson-1-mcp-setup-guide.md`.
- VS Code is open with the Claude Code panel in **Auto** mode.
- The `becomeainative-os` project is open in VS Code.
- This test task (`lesson-1-test-task.md`) is open in VS Code.

## Step 1: Examine your project

In the VS Code Explorer, make sure that your `becomeainative-os` project has this file structure. Claude downloaded these files for you in Lesson 01. If a file is in the incorrect folder, drag it to the correct folder:

```text
becomeainative-os/
├── .mcp.json
└── lesson-1/
    ├── lesson-1-mcp-setup-guide.md
    └── lesson-1-test-task.md
```

## Step 2: Write the results file by hand

In the `lesson-1` folder, make the file `lesson-1-test-results.md`. Write the text of this file yourself, in Markdown. The file must have these items, in this sequence:

1. **A title** (level-1 heading): `Lesson 01 test results`.
2. **A bullet list item** `Date:` and the date of today after it.
3. **Two numbered sections** (level-2 headings). Keep these sections empty:
   1. `Project structure`
   2. `MCP test results`

If you do not know the Markdown syntax for headings or lists, ask Claude to explain it. But type the file yourself.

Open the preview to see the result.

## Step 3: Let Claude check the file

In the Claude Code panel, ask Claude to examine the Markdown structure of the results file that you made.

Read the changes that Claude made. If a change is not correct, ask Claude to undo it or to do it again.

## Step 4: Let Claude fill project structure

In the same conversation, send:

```text
Read the becomeainative-os project file structure and put it into the lesson 1 test results file
```

Open `lesson-1-test-results.md`. Make sure that the structure in the file is the same as your real file structure.

## Step 5: Test the MCP connections

1. Send this text to Claude:

   ```text
   Test the Confluence, Jira, GitLab, Slack and knowledge base (kb) MCP connections
   ```

   If there are problems, ask Claude to correct them. If Claude cannot help, open `lesson-1-mcp-setup-guide.md` again. Then do the configuration steps for that system again.

2. When Claude completes the tests, write the results into `lesson-1-test-results.md`. Send this text:

   ```text
   Write the MCP connection test results into the lesson 1 test results file
   ```

   Wait until Claude completes the task. Then open `lesson-1-test-results.md` and examine the results. Make sure that the file has a result for each of the five systems.

## Step 6: Send your results for review

1. Ask Claude to send your test results. Send this text:

   ```text
   Check lesson-1/lesson-1-test-results.md for secrets, then send it to the Slack cohort channel. Mention @channel in the message. Send me the link to the message.
   ```

2. Click the link. Make sure that the message is in the correct Slack channel. If it is not, ask Claude to correct it.

**Stuck?** Write the exact error in the cohort channel yourself.
