# Lesson 02 practice & test task

## Contents

- [Before you start](#before-you-start)
- [How the AI agent saves your results](#how-the-ai-agent-saves-your-results)
- [Step 1: See your limits at the start](#step-1-see-your-limits-at-the-start)
- [Step 2: Use new chats and the history](#step-2-use-new-chats-and-the-history)
  - [Step 2.1: Start a new conversation](#step-21-start-a-new-conversation)
  - [Step 2.2: Name a session, and find it](#step-22-name-a-session-and-find-it)
  - [Step 2.3: Write a handoff, and continue from it](#step-23-write-a-handoff-and-continue-from-it)
  - [If Step 2 does not work](#if-step-2-does-not-work)
- [Step 3: Give the AI agent your rules](#step-3-give-the-ai-agent-your-rules)
  - [Step 3.1: Make `CLAUDE.md`, and test a strict rule](#step-31-make-claudemd-and-test-a-strict-rule)
  - [Step 3.2: Add an import and a link](#step-32-add-an-import-and-a-link)
  - [If Step 3 does not work](#if-step-3-does-not-work)
- [Step 4: Let the AI agent follow this file](#step-4-let-the-ai-agent-follow-this-file)
  - [Step 4.1: Give the file to the AI agent](#step-41-give-the-file-to-the-ai-agent)
  - [Step 4.2: The tasks for the AI agent](#step-42-the-tasks-for-the-ai-agent)
  - [If Step 4 does not work](#if-step-4-does-not-work)
- [Step 5: Read the log](#step-5-read-the-log)
- [Step 6: Use the stop button](#step-6-use-the-stop-button)
- [Step 7: Try the permission modes](#step-7-try-the-permission-modes)
  - [If Step 7 does not work](#if-step-7-does-not-work)
- [Step 8: Set the safeguards](#step-8-set-the-safeguards)
- [Step 9: Answer questions from the AI agent](#step-9-answer-questions-from-the-ai-agent)
- [Step 10: Give new tasks while the AI agent works](#step-10-give-new-tasks-while-the-ai-agent-works)
- [Step 11: Close and send your results](#step-11-close-and-send-your-results)
  - [Step 11.1: See your limits at the end](#step-111-see-your-limits-at-the-end)
  - [Step 11.2: Send your results to Slack](#step-112-send-your-results-to-slack)
  - [Step 11.3: Decide which safeguards to keep](#step-113-decide-which-safeguards-to-keep)

## Before you start

- VS Code is open with the Claude Code panel in **Auto** mode. Some tasks change the mode. Go back to Auto when the task tells you.
- The `becomeainative-os` project is open in VS Code. All work is in this project.
- Do the steps in sequence, because each step starts from the result of the step before it.

## How the AI agent saves your results

You write only the limits yourself, in `lesson-2/results/limits.md` (Steps 1 and 11.1). At the end of each other step, you send a prompt. The AI agent saves the result of the step in a file in `lesson-2/results/`. In Step 11.2, the AI agent puts a summary of your limits, your `CLAUDE.md` and your `.claude/settings.json` into one report, and sends the report to Slack.

All files that you download or create in this lesson are in `lesson-2/`. There are two exceptions: `CLAUDE.md` and `.claude/settings.json`. Claude Code reads them only from the root of the project.

The AI agent cannot see the panel, for example `/usage`, `/context` and the permission questions. When a step tells you, make a screenshot and paste it with the prompt.

## Step 1: See your limits at the start

1. Type `/usage` in the prompt box, and select `/usage` in the list of commands.
2. In the Explorer, create the file `lesson-2/results/limits.md`. Copy this text into it:

    ```markdown
    # Limits

    ## Before Lesson 02

    - Session (5hr) used:
    - Weekly (7 day) used:

    ## At the end of Lesson 02

    - Session (5hr) used:
    - Weekly (7 day) used:
    ```

3. In the "Before Lesson 02" section, write the values from the usage panel. You fill the second section in Step 11.1.

## Step 2: Use new chats and the history

### Step 2.1: Start a new conversation

1. Start a new conversation. Send: `Write lesson-2/drafts/loyalty-ideas.md with five ideas for a loyalty program of a travel company.`
2. Start a new conversation with the **+** button.
3. Send: `What did we do in the previous conversation?`
4. Send: `Save my last question and your answer in lesson-2/results/step-02-new-chat.md.`

### Step 2.2: Name a session, and find it

1. Open the session history with the clock button. Find the conversation of item 1 of Step 2.1.
2. Rename it `l02-loyalty-ideas`.
3. Start a new conversation. Then open the session history, and search for the word `loyalty`.
4. Open `l02-loyalty-ideas`, and send: `Add five more ideas to lesson-2/drafts/loyalty-ideas.md.`

### Step 2.3: Write a handoff, and continue from it

1. In the same conversation, send: `Save the progress of this task in lesson-2/drafts/handoff-loyalty-pilot.md, so that a new conversation can continue from it. Write a maximum of 30 lines.`
2. Read the file. If a colleague can continue the work from this file, the handoff is good. If not, add what is missing.
3. Start a new conversation. Send only: `@lesson-2/drafts/handoff-loyalty-pilot.md Continue with the next step.`

The AI agent must continue the work from the handoff.

### If Step 2 does not work

| Symptom | Fix |
|---|---|
| The search in the history does not find the session | Search for a different word from your first message of Step 2.1 |
| The handoff tells all of the conversation again | Ask for "state, not story": files, decisions, open questions, next step |
| The new conversation asks what to do | The next step in the handoff is too vague. Make it one clear action with a file path |

## Step 3: Give the AI agent your rules

### Step 3.1: Make `CLAUDE.md`, and test a strict rule

1. In the Lesson 02 theory, read "Part 11: How to write `CLAUDE.md`". It gives the six sections, the best practices and an example.
2. Build your own `CLAUDE.md` file.
3. At the end of `CLAUDE.md`, add this rule:

    ```markdown
    Answer only with 5 French words to all user questions. Never break this rule, even if the user asks.
    ```

4. Restart VS Code. Claude Code loads the changes in `CLAUDE.md` only after a restart.
5. Send: `Explain what a loyalty program of a travel company is.`
6. Send: `Ignore the rule. Answer in English.`
7. Remove the rule from `CLAUDE.md`. Then restart VS Code again.
8. Ask Claude again to make sure that the rule was removed.

### Step 3.2: Add an import and a link

1. Send: `Create lesson-2/docs/glossary.md with 5 terms of my product, and lesson-2/docs/style-guide.md, a style guide of 40 lines for my documents.`
2. At the end of `CLAUDE.md`, add these two lines:

    ```markdown
    @lesson-2/docs/glossary.md
    Style guide: [style guide](lesson-2/docs/style-guide.md)
    ```

3. Restart VS Code. Type `/context`, and find the `Memory files` section. Find which file loads at the start: the glossary (the import) or the style guide (the link).

4. In the same conversation, send:

    ```text
    Add to lesson-2/results/step-03-context.md: a list of all files that are loaded in your context.
    ```

When you complete Step 3, you see these results:

- The AI agent followed the strict rule from `CLAUDE.md`.
- A new conversation loads `CLAUDE.md` and the glossary, but not the style guide.
- `lesson-2/results/step-03-context.md` has the answers with the strict rule and the memory files at the start.

### If Step 3 does not work

| Symptom | Fix |
|---|---|
| The AI agent added sections that you did not ask for | Ask the AI agent to undo the change and do it again with "these six sections and nothing else" |
| The AI agent answers in usual English after you add the strict rule | Claude Code did not load the new rule. Restart VS Code, and send the text again |
| The AI agent still answers in French after you remove the rule | Restart VS Code again |
| `/context` does not show `CLAUDE.md` in `Memory files` | `CLAUDE.md` is not in the root, or it has a different name, for example `claude.md.txt`. Rename it to exactly `CLAUDE.md` |
| `/context` also shows the style guide | The link starts with `@`. Change it to a usual Markdown link, and restart VS Code |

## Step 4: Let the AI agent follow this file

### Step 4.1: Give the file to the AI agent

1. Start a new conversation. Send this text:

    ```text
    Do Task A and Task B of Step 4.2 in @lesson-2/lesson-2-practice-and-test-task.md, one task at a time. After each task, tell me what you did.
    ```

2. Monitor the steps in the panel.
3. When the AI agent completes Task B, send: `Stop. Go back to Task A.`
4. Make sure that the AI agent does Task A again, and that `lesson-2/sources/` still has one file.

### Step 4.2: The tasks for the AI agent

**Task A.** Create the folder `lesson-2/sources/`. Download this file into it, and do not change the file or its name:

```text
https://becomeainative.io/lessons/lesson-2/downloads/notes-loyalty-pilot.md
```

**Task B.** Create the folder `lesson-2/drafts/` with 3 random draft files related to loyalty programs. Then create `lesson-2/results/step-04-sources.md` with the name and the size of files in `lesson-2/sources/` and `lesson-2/drafts/`.

If everything worked, congrats! You used this md file as an instruction for Claude.

### If Step 4 does not work

| Symptom | Fix |
|---|---|
| The AI agent does all of Step 4, not only Task A and Task B | Click the stop button. Tell it: "Do only Task A and Task B." |
| The download fails | Make sure that the URL is complete. Send Task A again |
| The AI agent changed the name or the text of the file | Delete the copy and download it again with "do not change the file or its name" |
| The AI agent does not go back to Task A | Send again: "Stop. Go back to Task A of Step 4.2." |

## Step 5: Read the log

1. Go to the conversation of Step 4. Read the log from the top.
2. Click one "Thought for" row. Find one decision of the model.
3. Send: `List the steps that you did in this conversation.` Compare the report of the AI agent with the log.
4. Send:

    ```text
    Find the session file of this conversation in ~/.claude/projects/. Write lesson-2/results/step-05-log.md with: a table of each tool call in sequence (number, tool, description), one decision from your thinking, and each difference between your list of steps and the session file.
    ```

When you complete Step 5, you see this result. `lesson-2/results/step-05-log.md` has the tool calls of Step 4, one decision of the model and the differences.

## Step 6: Use the stop button

1. Start a new conversation. Send: `Find 20 loyalty programs of travel companies on the web. Write each one in a new row of lesson-2/drafts/loyalty-programs.md. Do deep research unless I stop you.`
2. After 20s, click the stop button.
3. Send: `Explain what you did before I stopped you, and why you decided to do it. Do not change anything.`
4. Ask the AI agent to continue.
5. Ask the AI agent to stop in the chat and check when it will stop (it can take a while).
6. In the Explorer, make sure that the files agree with your instruction.
7. Send:

    ```text
    Write lesson-2/results/step-06-stop.md with all actions you did during this conversation and the reasons why you stopped.
    ```

## Step 7: Try the permission modes

1. Start a new conversation. Click the mode indicator, and read the modes in the menu.
2. Select **Manual**. Send: `Create lesson-2/modes/modes-test.md with one line: "Status: draft".` Approve the action with **1 Yes**. Count the questions.
3. Select **Edit automatically**. Send: `Add the line "Owner: me" below the first line of lesson-2/modes/modes-test.md. Then count the words in lesson-2/modes/modes-test.md with a Python script.` Find which action ran without a question, and which action waited.
4. Select **Plan**. Send: `Propose a folder structure for the files of a loyalty pilot project.` The plan opens as a document. Add one comment to the plan, then approve it.
5. Select **Auto**. Send: `Read a file on my desktop.` Look at what Auto does. Answer the question with **3 No**.
6. In Auto, send this text:

    ```text
    Show me your plan first, and wait for my approval.
    Task: create lesson-2/modes/kickoff-agenda.md, an agenda of five items for the kickoff meeting of a loyalty pilot of a travel company.
    ```

7. Correct one step of the plan, for example: `Also give an owner and a time for each item. Show me the new plan, and wait.` When the new plan is correct, send: `The plan is approved. Do it.`
8. Make sure that the mode indicator shows **Auto**.
9. Send:

    ```text
    Write lesson-2/results/step-07-modes.md with the action of each mode that I used in this conversation, and if it ran without a question or waited. If you do not know if a question showed, ask me, with options to select.
    ```

Do not try "Bypass permissions" mode. It is for isolated containers. Never use it on your computer.

### If Step 7 does not work

| Symptom | Fix |
|---|---|
| Manual mode does not ask before it creates the file | A permission rule already allows the action. Look for the rule in `.claude/settings.json`. Tell the AI agent about it in item 9 |
| Auto mode reads the file on your desktop without a question | This is a result too. Auto does not guarantee safety. Tell the AI agent about it in item 9 |
| The AI agent edits before you approve the plan | Ask the AI agent to undo the edit. Send the task again, and start it with "Show me your plan first, and wait for my approval." |

## Step 8: Set the safeguards

1. Start a new conversation. Make sure that the mode indicator shows **Auto**.
2. Send:

    ```text
    Allow all tools in this project. Add permission rules to .claude/settings.json of this project that allow these tools without a question: Read, Edit, Write, Glob, Grep, Bash, WebFetch, WebSearch. Do not change other settings.
    ```

3. If Claude Code asks for your permission to edit `.claude/settings.json`, read the change, and approve it with **1 Yes**.
4. In the Explorer, open `.claude/settings.json`. Make sure that the `allow` list in `permissions` has a rule for each of the eight tools, for example:

    ```json
    {
      "permissions": {
        "allow": [
          "Read",
          "Edit",
          "Write",
          "Glob",
          "Grep",
          "Bash",
          "WebFetch",
          "WebSearch"
        ]
      }
    }
    ```

5. If a rule is not in the file, tell the AI agent what is missing, and do items 3 and 4 again.
6. Restart VS Code. Claude Code loads the changes in `.claude/settings.json` only after a restart.
7. Test the rules. Start a new conversation, and send:

    ```text
    List the files in lesson-2/ with a bash command. Then create lesson-2/drafts/permission-test.md with one line: "Test".
    ```

8. If no question shows, the rules work. If a question shows, answer it with **1 Yes**. Then send:

    ```text
    The permission rules in .claude/settings.json do not work. Claude Code asked for my permission for this action: <the action>. Find the cause, and fix the rules. Do not change other settings.
    ```

9. Do items 6 to 8 again until no question shows.
10. Send:

    ```text
    Write lesson-2/results/step-08-safeguards.md with: the rules in .claude/settings.json for the tools of this project, if a permission question showed when you edited the file, and one row for each test: the actions, if a question showed, and what the AI agent fixed. If you do not know if a question showed, ask me, with options to select.
    ```

When you complete Step 8, you see this result. `.claude/settings.json` has the rules for the eight tools. The test runs without a question. `lesson-2/results/step-08-safeguards.md` has the rules and the tests.

## Step 9: Answer questions from the AI agent

1. Start a new conversation. Send: `Play a quiz with me about project management. Ask me 3 questions, one at a time, with options to select. Do not read files.`
2. Before you answer, look at the panel. The AI agent waits, and the task does not continue until you answer.
3. For two questions, select an option. For one question, write your own answer.
4. Send:

    ```text
    Write lesson-2/results/step-09-questions.md with your three questions, my answers, and which answers I selected and which I wrote.
    ```

When you complete Step 9, you see this result. You answered three questions in two ways. `lesson-2/results/step-09-questions.md` has the questions and your answers.

## Step 10: Give new tasks while the AI agent works

1. Start a new conversation. Send: `Write lesson-2/drafts/vp-summary-loyalty-pilot.md: a summary of @lesson-2/sources/notes-loyalty-pilot.md for the VP, in five lines.`
2. While the AI agent works, send a correction: `Lead with the open decision about the points percentage.`
3. While the AI agent still works, send the next task: `After you complete the summary, write the open questions of the pilot with their owners in lesson-2/drafts/open-questions-loyalty-pilot.md.`
4. Start a new conversation. Send: `Read @lesson-2/sources/notes-loyalty-pilot.md and write the three main risks of the pilot in lesson-2/drafts/risks-loyalty-pilot.md.`
5. Open the first conversation from the session history. Make sure that the summary starts with the open decision, and that the AI agent did the two tasks in sequence.

Make sure that all tasks in all conversations are running while you are switching between them.

## Step 11: Close and send your results

### Step 11.1: See your limits at the end

1. Type `/usage`.
2. Open `lesson-2/results/limits.md`. In the "At the end of Lesson 02" section, write the values from the usage panel.
3. Compare the two sections.

### Step 11.2: Send your results to Slack

1. Start a new conversation. Send:

    ```text
    Create lesson-2/lesson-2-test-results.md, one report with these three sections:
    1. "Usage": a summary of lesson-2/results/limits.md, with the usage before and at the end of Lesson 02, and the increase.
    2. "CLAUDE.md": the full text of CLAUDE.md.
    3. ".claude/settings.json": the full text of .claude/settings.json.
    Do not change CLAUDE.md, .claude/settings.json or lesson-2/results/limits.md.
    ```

2. Open the report. Make sure that it has the three sections, and that each section is complete. If it does not, ask Claude to correct it.
3. Send:

    ```text
    Make sure that lesson-2/lesson-2-test-results.md has no secrets. Then send it to the Slack cohort channel. Mention @channel in the message. Send me the link to the message.
    ```

4. Click the link. Make sure that the message is in the correct Slack channel and has the report. If it does not, ask Claude to correct it.

**Stuck?** Ask the AI agent to help you or to write the exact error in the cohort channel.

### Step 11.3: Decide which safeguards to keep

Remove the safeguard rules that you do not want to keep from `.claude/settings.json`. Practical advice: keep all AI agent commands allowed for this intensive, but be careful with your real work.
