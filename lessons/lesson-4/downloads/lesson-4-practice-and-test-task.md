# Lesson 04 practice & test task

## Contents

- [Before you start](#before-you-start)
- [Part A: Know your MCP servers and their tools](#part-a-know-your-mcp-servers-and-their-tools)
  - [Exercise 1: Measure the token use at the start](#exercise-1-measure-the-token-use-at-the-start)
  - [Exercise 2: Look at each MCP server](#exercise-2-look-at-each-mcp-server)
  - [Exercise 3: Save the descriptions of the tools](#exercise-3-save-the-descriptions-of-the-tools)
  - [Exercise 4: Understand the action tools and decide which Claude Code can use](#exercise-4-understand-the-action-tools-and-decide-which-claude-code-can-use)
- [Part B: Work with the tools](#part-b-work-with-the-tools)
  - [Exercise 5: Make your tickets](#exercise-5-make-your-tickets)
  - [Exercise 6: Update and move your tickets](#exercise-6-update-and-move-your-tickets)
  - [Exercise 7: Link, comment and log work](#exercise-7-link-comment-and-log-work)
  - [Exercise 8: Make a Confluence page and connect it to Jira](#exercise-8-make-a-confluence-page-and-connect-it-to-jira)
  - [Exercise 9: Update the page and add a child page](#exercise-9-update-the-page-and-add-a-child-page)
  - [Exercise 10: Delete your records](#exercise-10-delete-your-records)
- [Part C: Complex tasks across all systems](#part-c-complex-tasks-across-all-systems)
  - [Exercise 11: From the code to a weekly summary](#exercise-11-from-the-code-to-a-weekly-summary)
  - [Exercise 12: Prepare the next planning meeting](#exercise-12-prepare-the-next-planning-meeting)
- [Test task](#test-task)
  - [Before you start the test task](#before-you-start-the-test-task)
  - [The case](#the-case)
  - [Step 1: Make the results file](#step-1-make-the-results-file)
  - [Step 2: Collect the facts](#step-2-collect-the-facts)
  - [Step 3: Find the gaps](#step-3-find-the-gaps)
  - [Step 4: Write the result to the systems](#step-4-write-the-result-to-the-systems)
  - [Step 5: List the tool calls and write the conclusion](#step-5-list-the-tool-calls-and-write-the-conclusion)
  - [Step 6: Send your results for review](#step-6-send-your-results-for-review)
- [At the end: measure the token use again](#at-the-end-measure-the-token-use-again)
- [How we engage the cohort to help each other on this lesson](#how-we-engage-the-cohort-to-help-each-other-on-this-lesson)

## Before you start

- You read the theory of Lesson 04.
- Your five MCP connections from Lesson 01 work: `knowledge-base`, `jira`, `confluence`, `gitlab` and `slack`.
- VS Code is open with the Claude Code panel in **Auto** mode.
- The `becomeainative-os` project is open in VS Code.
- This file is in the folder `lesson-4/` in the root of your project.

At the end of each exercise, the AI agent saves the result in `lesson-4/results/`. The exercise names the file. You read the result and correct it.

In Part A, the AI agent only reads. It does not call a tool that changes a system.

## Part A: Know your MCP servers and their tools

Before you give work to your AI agent in a system, you must know what it can do there. In Part A, you examine each of your five MCP servers: which tools it has, which tools only read and which tools change data. Then you decide which tools Claude Code can use.

### Exercise 1: Measure the token use at the start

In this exercise, you write down your token use before the practice. At the end of the practice, you measure it again and compare.

#### Steps

1. Type `/usage` in the chat. Then select `/usage` in the list of commands.
2. Write down the percent of your session limit and the percent of your weekly limit.
3. Write down how many tokens the MCP servers used in total. `/usage` does not show the tokens of each server.
4. Tell the AI agent to save these numbers, with the date and the time, in `lesson-4/results/usage-start.md`.

#### If Exercise 1 does not work

| Symptom | Fix |
|---|---|
| `/usage` shows no tokens for MCP | You did not use MCP tools in this session yet. Write down 0 |

### Exercise 2: Look at each MCP server

In this exercise, you see the status and the tools of each server in the `/mcp` panel (Part 7 of the theory).

The `jira` and the `confluence` servers are the same program. Each of them shows the tools of Jira and the tools of Confluence. But each server works only with its own system: the `jira` server only with Jira, the `confluence` server only with Confluence. Thus, for the `jira` server, count only the tools that start with `jira_`. For the `confluence` server, count only the tools that start with `confluence_`.

#### Steps

1. Type `/mcp`. Make sure that the five servers have the status Connected.
2. Select the first server. Click **View tools**.
3. Count the tools with the tag **read-only** and the tools with the tag **destructive**.
4. Click **Back to list**. Do steps 2 and 3 again for each server.
5. Tell the AI agent to save a table in `lesson-4/results/mcp-servers.md`: server, status, number of tools, number of read-only tools, number of destructive tools.

#### If Exercise 2 does not work

| Symptom | Fix |
|---|---|
| A server has the status Failed | Click **Reconnect**. If it fails again, make sure that the token in `.mcp.json` is correct. Then close VS Code completely and open it again |

### Exercise 3: Save the descriptions of the tools

The `/mcp` panel does not show the descriptions of the tools. The AI agent selects a tool by its description. In this exercise, you save the descriptions of all tools in files.

The descriptions of one server use a large part of the context. Thus, use a new conversation for each server.

#### Steps

1. Start a new conversation. Send this text:

    ```text
    Show all tools of the jira server that start with jira_. For each tool, give its name, its tag (read-only or destructive), its full description and its inputs, exactly as the server gave them. Do not call any tool of jira. Save the result in lesson-4/results/tools/jira.md.
    ```

2. Open `lesson-4/results/tools/jira.md`. Make sure that the number of tools agrees with your count in Exercise 2.
3. Do steps 1 and 2 again for `confluence`, `gitlab`, `slack` and `knowledge-base`. Change the server name in the prompt and in the file name. For `confluence`, keep only the tools that start with `confluence_`. For the other servers, delete the words "that start with jira_".

#### If Exercise 3 does not work

| Symptom | Fix |
|---|---|
| The file has fewer tools than `/mcp` | Tell the AI agent: "The server has <number> tools. Add the tools that are not in the file." |
| A tool of the `jira` server for Confluence gives an error, or the other way around | This is correct. Use the `confluence` server for Confluence, and the `jira` server for Jira |

### Exercise 4: Understand the action tools and decide which Claude Code can use

The action tools change data in a system. In this exercise, you learn what each action tool of your servers can change. Then you decide for each action tool if Claude Code can use it:

- **Allow.** Claude Code uses the tool when your task needs it.
- **Ask first.** Claude Code uses the tool only after your approval of each call.
- **Never.** Claude Code does not use the tool. You do this action yourself in the system.

#### Steps

1. Start a new conversation. Send this text:

    ```text
    Read the files in lesson-4/results/tools/. For each destructive tool, tell in business language: what it changes, in which system, who sees the change, and if I can undo it. Mark the tools that delete, send to many persons or merge. Do not call any tool. Save the result as a table in lesson-4/results/action-tools.md.
    ```

2. Read the table. For each tool that you do not understand, ask the AI agent more questions.
3. Find a tool that has the tag read-only, but the name or the description of which tells "create", "update", "delete" or "send". If you find one, write it at the end of the file.
4. Add a column "My decision" to the table. For each action tool, write Allow, Ask first or Never, and one reason.
5. Use your decisions in your work. When Claude Code asks about a tool with the decision Never, refuse the call, and do the action yourself in the system.

## Part B: Work with the tools

In Lesson 03, you only read: you searched the BAIN KB, read pages in Confluence and found tickets in Jira. In Part B, you change data. You make, update, move, link and delete tickets in Jira and pages in Confluence. Each exercise uses new tools. The exercise names them.

You work in two shared practice spaces:

- The Jira project `PRAC` (Practice), with the Kanban board "PRAC board".
- The Confluence space `PRAC`.

You make tickets only in the Jira project `PRAC`, and pages only in the Confluence space `PRAC`. In the Jira project `UMAMI` and in the Confluence space `UMAMI`, you can only read. Jira and Confluence refuse each change there.

All students of the cohort work in these spaces. Thus, obey these rules in each exercise:

- Put your name in each title, for example "Revenue in EUR shows as USD (Anna)".
- Change only the tickets and the pages that you made.
- Before each write, ask for a table of the planned writes. Read it, then say "go" (Part 8 of the theory, habit 3).
- After each write, tell the AI agent to read the record again and compare (Part 8 of the theory, habit 4).
- Do not send a message in Slack to a different person. Send messages only to yourself.

The source of your work is the UMAMI project from Lesson 03. You plan the work of the UMAMI team in the practice project, after the planning meeting of 2026-11-09.

Save the keys of your tickets and the links of your pages in `lesson-4/results/my-records.md`. The next exercises use them.

### Exercise 5: Make your tickets

New tools: `jira_batch_create_issues`, `jira_get_issue`. The tool `jira_batch_create_issues` makes many tickets with one call. It has the input `validate_only`. With it, Jira examines the tickets, but it does not make them. This is a dry run.

#### Steps

1. Send this text:

    ```text
    Read the table "Tickets that we plan" in the UMAMI page "Planning meeting notes, 2026-11-09" through the knowledge-base MCP. For UMAMI-9, UMAMI-10, UMAMI-11 and UMAMI-18, plan four Tasks in the project PRAC, with a short description and a link to the UMAMI ticket. Add " (<your name>)" to each summary. First call jira_batch_create_issues with validate_only true, and show me the result.
    ```

2. Read the result of the dry run. If Jira found an error, tell the AI agent to correct it.
3. Type `go`. The AI agent makes the four tickets with one call.
4. Tell the AI agent to read each new ticket again with `jira_get_issue` and compare it with the plan.
5. Save the four keys in `lesson-4/results/my-records.md`.

#### If Exercise 5 does not work

| Symptom | Fix |
|---|---|
| The AI agent asks for the project key | Tell it: "PRAC". The description of the tool tells the AI agent never to guess a project key |
| The AI agent plans the tickets in the project UMAMI, or Jira refuses them there | Tell it: "Make the tickets only in the project PRAC." |
| The AI agent makes the tickets one by one | Tell it: "Use jira_batch_create_issues, one call for all four tickets." |
| The AI agent skipped the dry run | Stop it before it makes the tickets. Tell it again: "validate_only true first." |

### Exercise 6: Update and move your tickets

New tools: `jira_update_issue`, `jira_get_agile_boards`, `jira_get_board_issues`, `jira_get_transitions`, `jira_transition_issue`.

A ticket cannot go to each status. The workflow of the project tells which moves are possible. `jira_get_transitions` shows them.

#### Steps

1. Send this text:

    ```text
    For my four tickets in lesson-4/results/my-records.md, plan these changes: the label "lesson-4" on each ticket and the priority High for the ticket about revenue. Then move the ticket about revenue to In Progress, or to the nearest status with this meaning. Use only a transition that jira_get_transitions gives. Show me the plan as a table and wait for my "go".
    ```

2. Read the table. Then type `go`.
3. Tell the AI agent to read each ticket again and compare the label, the priority and the status with the plan.
4. Tell the AI agent to show your tickets on the board "PRAC board", by status. Then open the board in the browser and find your tickets.

#### If Exercise 6 does not work

| Symptom | Fix |
|---|---|
| The AI agent tries a status name that does not exist | Tell it: "First call jira_get_transitions, and use only a transition from its result." |

### Exercise 7: Link, comment and log work

New tools: `jira_get_link_types`, `jira_create_issue_link`, `jira_add_comment`, `jira_add_worklog`.

In the UMAMI project, UMAMI-18 depends on UMAMI-9. In this exercise, you show the same dependency between your copies.

#### Steps

1. Tell the AI agent to show the link types of this Jira.
2. Send this text:

    ```text
    Plan these writes for my tickets in lesson-4/results/my-records.md: a link "blocks" from my copy of UMAMI-9 to my copy of UMAMI-18, a comment on my copy of UMAMI-18 that tells why it is blocked, with a link to UMAMI-18, and a worklog of 30 minutes on my ticket about revenue. Show me the plan as a table and wait for my "go".
    ```

3. Read the table. Then type `go`.
4. Open your copy of UMAMI-18 in the browser. Make sure that it shows "is blocked by" and the comment. Then open the ticket about revenue and find the worklog.

#### If Exercise 7 does not work

| Symptom | Fix |
|---|---|
| The link goes in the incorrect direction | Tell the AI agent to delete the link and make it again. "A blocks B" means that B waits for A |
| The AI agent plans a Jira link to UMAMI-18 | Refuse it. A Jira link also changes UMAMI-18, and you cannot change the project UMAMI. Put the link to UMAMI-18 as a URL in the comment |
| The worklog shows a different time | Tell the AI agent the exact format: "30m" |

### Exercise 8: Make a Confluence page and connect it to Jira

New tools: `confluence_create_page`, `jira_create_remote_issue_link`.

#### Steps

1. Send this text:

    ```text
    Plan a page in the Confluence space PRAC with the title "UMAMI work plan (<your name>)". The page has a table of my four tickets from lesson-4/results/my-records.md: key, summary, status, priority, link. Show me the text of the page and wait for my "go".
    ```

2. Read the text. Then type `go`.
3. Tell the AI agent to add a link to the new page in each of your four tickets, with `jira_create_remote_issue_link`.
4. Open the page and one ticket in the browser. Make sure that the page shows the tickets, and the ticket shows the page.
5. Save the link of the page in `lesson-4/results/my-records.md`.

#### If Exercise 8 does not work

| Symptom | Fix |
|---|---|
| The AI agent cannot find the space PRAC | Tell it to search for the space with `confluence_search`. Then make sure with it that the space key is correct |
| The AI agent plans the page in the space UMAMI, or Confluence refuses it there | Tell it: "Make the page only in the space PRAC." |
| The table on the page has no links | Tell the AI agent to update the page and add the links |

### Exercise 9: Update the page and add a child page

New tools: `confluence_update_page`, `confluence_add_label`, `confluence_get_page_history`, `confluence_get_page_children`, `confluence_add_comment`.

#### Steps

1. Tell the AI agent to add a section "Risks" to your page. Take the risks from the page "Planning meeting notes, 2026-11-09". Tell it to show the change and wait for your "go".
2. Tell the AI agent to add the labels "lesson-4" and "work-plan" to the page. Then tell it to get version 1 of the page and to tell what changed in the current version.
3. Tell the AI agent to make a child page of your page, with the title "Open questions (<your name>)". Take the open questions from the page "Planning meeting notes, 2026-11-09". Then tell it to show the child pages of your page.
4. Tell the AI agent to add a comment to your main page: "Open questions are on the child page", with a link.
5. Open the page in the browser. Make sure that the table from Exercise 8 is still there, and find the labels and the comment.

#### If Exercise 9 does not work

| Symptom | Fix |
|---|---|
| The table from Exercise 8 is gone or broken | An update replaces all the text of a page. Tell the AI agent to read the page first, and to keep all text that you did not ask to change. Then restore the table from the previous version |
| The labels have spaces or capital letters | Confluence labels have no spaces. Use "lesson-4" and "work-plan" |
| The new page is not a child page | Tell the AI agent to move it under your page. Give it the ID of your page |

### Exercise 10: Delete your records

New tools: `jira_delete_issue`, `confluence_delete_page`.

You cannot undo a deletion. Thus, this exercise has a dry run and a read-back.

#### Steps

1. Send this text:

    ```text
    Plan the deletion of my child page "Open questions (<your name>)" in Confluence, and of my ticket that is a copy of UMAMI-11 in Jira. Show me the title, the key or the ID, and the link of each item. Do not delete anything before my "go".
    ```

2. Open each link in the browser. Make sure that each item is yours.
3. Type `go`. If your decision for these tools in Exercise 4 is Never, do not type `go`. Delete the two items yourself in the browser.
4. Tell the AI agent to search for the two items again. Make sure that it finds neither of them.
5. Update `lesson-4/results/my-records.md`.

#### If Exercise 10 does not work

| Symptom | Fix |
|---|---|
| The plan has an item of a different student | Stop. Tell the AI agent to use only the keys and the links in your file |
| The search still finds the deleted page | The search of Confluence updates some minutes later. Tell the AI agent to open the page by its ID. If it cannot open the page, the page is deleted |
| Jira refuses the deletion | Your account cannot delete tickets in this project. Write it in your file. Move the ticket to the last status instead |

## Part C: Complex tasks across all systems

In real work, one task uses many systems. In Part C, you give the AI agent one task, and it uses the tools of four or five servers. You approve the plan and each write. You do not tell the AI agent which tools to use. After each task, read which tools it selected.

The rules of Part B apply: your name in each title, only your own records, a plan before each write, a read-back after each write, Slack messages only to yourself.

### Exercise 11: From the code to a weekly summary

The Head of Product asks: "What did the Umami developers change in September 2026?" The developers do not write a summary. The answer is in GitLab.

#### Steps

1. Send this text:

    ```text
    Read the commits of the GitLab project bain/umami from 2026-09-01 to 2026-09-30. For each change, tell in business language what it gives to the users of Umami. Then plan:
    1. A Confluence page in the space PRAC: "Umami changes in September 2026 (<your name>)", with a table: change, developer, date, link to the commit.
    2. One Jira Task in the project PRAC for each change that a manager must act on, for example to tell the users or to test it. Add " (<your name>)" to each summary, and a link to the page.
    3. A direct message only to me in Slack: three sentences and the links to the page and the tickets.
    Show me the full plan and wait for my "go". Do not change anything in GitLab.
    ```

2. Read the plan. Correct it with the AI agent until you agree. Then type `go`.
3. Tell the AI agent to read each record again and compare it with the plan.
4. Tell the AI agent to list the tools that it used, by server.
5. Save the links in `lesson-4/results/my-records.md`.

#### If Exercise 11 does not work

| Symptom | Fix |
|---|---|
| The summary tells only the titles of the commits | Tell the AI agent to open the changes of each commit and to tell what changes for a user |
| The AI agent includes changes of dependencies and tests | Tell it: "Only changes that a user of Umami can see." |

### Exercise 12: Prepare the next planning meeting

The next planning meeting of the UMAMI team is on 2026-11-23. You prepare a status of each planned ticket, from all systems.

#### Steps

1. Send this text:

    ```text
    Prepare the status of the planned tickets for the UMAMI planning meeting of 2026-11-23:
    - Read the table "Tickets that we plan" in the page "Planning meeting notes, 2026-11-09" through the knowledge-base MCP.
    - For each ticket, read its status, assignee and comments in Jira.
    - For each assignee, find the commits in the GitLab project bain/umami from 2026-09-01 to 2026-09-30.
    - Make a table: ticket, assignee, status in Jira, commits in GitLab, risk. Mark each ticket where the status and the commits do not agree.
    Then plan: a Confluence page in the space PRAC, "Status for the planning meeting of 2026-11-23 (<your name>)", with this table, and a Slack draft in the channel #umami with the three main risks. Do not send the draft. Show me the plan and wait for my "go". Change nothing in the project UMAMI and in GitLab.
    ```

2. Read the plan. Then type `go`.
3. Open the page in the browser. Open Slack, and find the draft in `#umami`. Do not send it.
4. Tell the AI agent to list the tools that it used, by server.

#### If Exercise 12 does not work

| Symptom | Fix |
|---|---|
| The AI agent sends the message instead of a draft | Refuse the call. Tell it: "Only a draft, with slack_send_message_draft." |
| The AI agent wants to update the tickets of UMAMI | Refuse the call. You cannot change the project UMAMI. Tell it again: "Change nothing in the project UMAMI." |

## Test task

### Before you start the test task

- You completed Exercises 1 to 12 of this file.
- VS Code is open with the Claude Code panel in **Auto** mode.
- The `becomeainative-os` project is open in VS Code.

The time for the test task is approximately 40 minutes.

### The case

The Head of Product of Sandbox writes to you:

> "The UMAMI team made a plan on 2026-11-09. Does the work of the developers in September 2026 agree with the plan? Which work is not in the plan, and which planned work did not start? Make tickets for the gaps, and tell me the result."

Make the tickets in the Jira project `PRAC`, and the page in the Confluence space `PRAC`. You cannot change the project `UMAMI` or the space `UMAMI`.

Do the task with your AI agent, step by step. Write each step in the file `lesson-4/lesson-4-test-results.md`.

### Step 1: Make the results file

Tell the AI agent to make `lesson-4/lesson-4-test-results.md` with these sections:

```markdown
# Lesson 04 test results

## 1. The plan
## 2. The work in GitLab
## 3. The status in Jira
## 4. The gaps
## 5. The page in Confluence
## 6. The tickets in Jira
## 7. The message in Slack
## 8. Tool calls
## 9. Conclusion
```

### Step 2: Collect the facts

1. Tell the AI agent to read the plan in the page "Planning meeting notes, 2026-11-09". Write the planned tickets and the assignees in section 1, with the link.
2. Tell the AI agent to read the commits of the GitLab project `bain/umami` from 2026-09-01 to 2026-09-30. Write each change, its developer, its date and its link in section 2.
3. Tell the AI agent to read the status, the assignee and the comments of each planned ticket in Jira. Write them in section 3, with links.

Do not change anything in the project UMAMI or in GitLab.

### Step 3: Find the gaps

Tell the AI agent to compare sections 1, 2 and 3. Write two lists in section 4:

- Work in GitLab that is not in the plan.
- Planned tickets with no work in GitLab.

Give a source link for each item. Make sure yourself that each item agrees with its source.

### Step 4: Write the result to the systems

1. Tell the AI agent to plan these writes and to wait for your "go":
    - A Confluence page in the space `PRAC`: "Plan of 2026-11-09 and work of UMAMI in September 2026 (<your name>)", with the gaps and the links.
    - One Jira Task in the project `PRAC` for each gap, with " (<your name>)" in the summary and a link to the page.
    - A direct message only to you in Slack, with the result in three sentences and the links.
2. Read the plan. Then type `go`.
3. Tell the AI agent to read each record again and compare it with the plan.
4. Write the links in sections 5, 6 and 7.

### Step 5: List the tool calls and write the conclusion

1. Tell the AI agent to write in section 8 a table of all tool calls of this test task: step, server, tool, read or write, result.
2. Write section 9 yourself, in three to five sentences:
    - Which servers and tools the AI agent used, and which of them you did not know before this lesson.
    - Where you corrected the AI agent.
    - How much time the same task takes without an AI agent.

### Step 6: Send your results for review

1. Send this text to Claude Code. Replace `<N>` with the number of your cohort:

    ```text
    Make sure that lesson-4/lesson-4-test-results.md has no secrets and no personal data. Then send it to the Slack channel #cohort-<N>-lessons. Mention @channel in the message. Send me the link to the message.
    ```

2. Click the link. Make sure that the message is in the channel `#cohort-<N>-lessons`. If it is not, tell Claude to correct it.

**Stuck?** Write the full text of the error in the cohort channel.

## At the end: measure the token use again

Do this step after Part C and the test task.

1. Type `/usage`, and write down the same numbers as in Exercise 1.
2. Send this text:

    ```text
    Compare lesson-4/results/usage-start.md with the numbers that I give now: <numbers>. Tell me how many percent of my session limit and of my weekly limit this practice used, and how many tokens the MCP servers used in total. Save the result in lesson-4/results/usage-end.md.
    ```

3. Read the result. How many tokens did the MCP servers use? Which exercise made the largest results?

## How we engage the cohort to help each other on this lesson

Write all your questions and problems in the cohort channel. All the cohort sees them, and each answer helps all persons.

- **Read the channel before you write.** A different person can have the same problem and its solution.
- **Compare your decisions.** After Exercise 4, write in the channel which action tools you set to Never, and why. Find together the tools that all of the cohort blocks.
- **Compare the token use.** At the end, write in the channel how many percent of your session limit the practice used, and how many tokens the MCP servers used in total.
- **Do not write a token in the channel.** Do not send a screenshot that shows a token or `.mcp.json`.
