# Lesson 03 practice & test task

## Contents

- [The Sandbox environment](#the-sandbox-environment)
- [Your role in this practice](#your-role-in-this-practice)
- [Before you start](#before-you-start)
- [How the AI agent saves your results](#how-the-ai-agent-saves-your-results)
- [Part A: Find the project through the knowledge base](#part-a-find-the-project-through-the-knowledge-base)
  - [Exercise 1: Find what the knowledge base knows about Umami](#exercise-1-find-what-the-knowledge-base-knows-about-umami)
  - [Exercise 2: Find who owns what](#exercise-2-find-who-owns-what)
  - [Exercise 3: Find a decision and its source](#exercise-3-find-a-decision-and-its-source)
- [Part B: Find the project through direct connections](#part-b-find-the-project-through-direct-connections)
  - [Exercise 4: Find the project in Confluence and Jira](#exercise-4-find-the-project-in-confluence-and-jira)
  - [Exercise 5: Find the decisions in Confluence and Jira](#exercise-5-find-the-decisions-in-confluence-and-jira)
  - [Exercise 6: Find what the code tells about Umami](#exercise-6-find-what-the-code-tells-about-umami)
  - [Exercise 7: Find who works on the product](#exercise-7-find-who-works-on-the-product)
  - [Exercise 8: Compare the knowledge base with direct connections](#exercise-8-compare-the-knowledge-base-with-direct-connections)
- [Self-check: five questions](#self-check-five-questions)
- [FAQs](#faqs)
- [Test task](#test-task)
- [How we engage the cohort to help each other on this lesson](#how-we-engage-the-cohort-to-help-each-other-on-this-lesson)

## The Sandbox environment

In this practice and in the test task, you work in the Sandbox environment. Sandbox is a test company. It has test projects in Confluence, Jira and GitLab. We made these projects for the intensive. Thus, you can do each step, and the data of your company is not at risk.

All exercises use one project of Sandbox: Umami.

You, the manager, work with your AI agent. The AI agent connects to four systems, and it can read from each of them:

| System | What the AI agent reads in it | MCP connection |
|---|---|---|
| BAIN knowledge base (BAIN KB) | An index of the pages of Confluence and of the tickets of Jira | `knowledge-base` |
| Confluence | The full text of a page | `confluence` |
| Jira | A ticket with its live status, assignee and comments | `jira` |
| GitLab | Code, configuration and README files | `gitlab` |

The BAIN KB connects to Confluence and Jira. It does not connect to GitLab. Thus, the AI agent has two paths to read:

- Through the BAIN KB. The AI agent finds information quickly, because one query finds information in Confluence and Jira at the same time. The result gives the parts of the pages and tickets that agree with the query, with links to the sources.
- Directly, through the MCP connection of one system. The AI agent reads the live data of this system. For example, the full page, the status of a ticket or a file of the code.

For code and configuration, the direct path is the only path. The BAIN KB does not know what is in GitLab.

If you do not name a connection, the AI agent selects one. To make the AI agent use one MCP connection, do these steps:

1. In the first line of your prompt, name the connection that the AI agent must use.
2. In the same line, name the connections that the AI agent must not use.
3. Then write the task. For example:

    ```text
    Use only the knowledge-base MCP. Do not use other MCPs. Find what the knowledge base knows about the Umami project.
    ```

    ```text
    Use only the jira MCP. Do not use the knowledge-base MCP. Find the tickets of the Umami project that are not started.
    ```

4. Make sure that the AI agent used the correct connection. The Claude Code panel shows each step of the AI agent. A step through an MCP connection shows the name of the connection, for example `mcp__knowledge-base__`.
5. If the AI agent uses a different connection, stop it (Esc). Then send the prompt again.

If you do not remember how to test your MCP connections, go back to Lesson 01. Do the Lesson 01 test task, "Step 5: Test the MCP connections", again.

![The manager works with the AI agent. The AI agent reads from the BAIN KB, Confluence, Jira and GitLab. The BAIN KB indexes Confluence and Jira, but not GitLab.](https://becomeainative.io/lessons/lesson-3/img/lesson-3-practice-and-test-task/sandbox-read-and-change.png)

After a change in Confluence or Jira, the BAIN KB shows the change only after it indexes the system again.

In this lesson, you only read. You learn to read a new project with your AI agent. You read through the BAIN KB, and directly from Jira, Confluence and GitLab. When you start to work on a new product or a new project in your company, use the same method. You do not change pages, tickets or code. You change information in subsequent lessons.

All students share the pages, tickets and code of Umami. Thus, the AI agent only reads Confluence, Jira and GitLab. You write your results only in local files in your project.

## Your role in this practice

Today, you start to work in Sandbox. You are the manager of the project Umami. Your role includes project management and product management.

You know nothing about Umami:

- What the product is, and for which users.
- Who is on the team, who the developers are, and how much time each person gives to the project.
- What the team did, what it does at this time, and which decisions it made.

Nobody gives you an introduction to the project. You learn about Umami with your AI agent.

## Before you start

We recommend that you read Lesson 01, "Step 4: MCP configuration", again. It tells what an MCP connection is, how it works, and how you connect your AI agent to each system. In this practice, you use these connections in each exercise.

- In Lesson 01, you connected your AI agent to the Sandbox Jira, Confluence, GitLab, Slack and the BAIN KB. In `.mcp.json`, the names of these connections are `jira`, `confluence`, `gitlab`, `slack` and `knowledge-base`.
- VS Code is open with the Claude Code panel in **Auto** mode.
- The `becomeainative-os` project is open in VS Code. All work is in this project.
- Do the exercises in sequence, because each exercise uses the results of the exercises before it.

All files of this lesson are in the folder `lesson-3/` in the root of your project:

- `lesson-3/results/`: the results of the exercises. Each exercise makes one file. The name of the file tells what is in it.

At the end of each exercise, the AI agent saves the result in the file that the exercise names. You read the result and correct it.

Copy this file into `lesson-3/`. Do not change its name: `lesson-3-practice-and-test-task.md`.

## Part A: Find the project through the knowledge base

In Part A, you use only the `knowledge-base` connection. Lesson 03 theory, "Part 7: Work with the knowledge base through your AI agent", tells why. You give the task to the AI agent. Then the AI agent finds the information in the KB for you (rule 5). Tell the AI agent to give a link for each answer. The answer of an AI agent is not a source of truth (rule 7).

In each exercise of this practice, you write each prompt. Use the method from "The Sandbox environment": name the connection in the first line, and then give the task.

In Part A, you tell the AI agent the same rules in each exercise. The AI agent must give a source for each answer, and it must not guess. Lesson 02, "Part 11: How to write `CLAUDE.md`", gives this rule. If you give the same correction two times, add it to `CLAUDE.md`. We recommend that you put these rules in the `## Data rules` section of your `CLAUDE.md` before you start Part A. Then the AI agent follows them in each exercise, and you do not write them again. For example:

```markdown
## Data rules

- Give a link and a quote of the source for each answer.
- If you do not find an answer in a source, write "not found". Never guess.
```

### Exercise 1: Find what the knowledge base knows about Umami

In this exercise, you learn what the BAIN KB knows about the Umami project.

#### Steps

1. With the `knowledge-base` connection, tell the AI agent to find what the BAIN KB knows about the Umami project.
2. Read the answer. Then send more questions about the topics that you want to know.
3. Tell the AI agent to save what you learned in `lesson-3/results/umami-overview.md`, with a link for each fact.
4. Open the links in the browser. Make sure that each link opens the page or the ticket that the result names.

#### If Exercise 1 does not work

| Symptom | Fix |
|---|---|
| The AI agent answers from general knowledge, without links | Say again: "Only what the knowledge-base connection shows, with a link for each fact." Make sure that it used this connection. Then add the rule to your `CLAUDE.md` (Lesson 02, "Part 11") |
| The AI agent uses the `confluence` or `jira` connection | Stop it. Send the prompt again. The first line of the prompt must tell it to use only the `knowledge-base` connection |

### Exercise 2: Find who owns what

In this exercise, you find who owns each area and each page of Umami.

#### Steps

1. With the `knowledge-base` connection, find the answers to these questions. For each answer, get the link and a quote of the line that gives this answer:
    - Who do I speak to about missing events from the app?
    - Who do I speak to about incorrect numbers on the dashboard?
    - Who makes the decision about which data hotel partners can see, and who must agree?
    - Who owns each page of the Confluence space `UMAMI`? Get a table: page, owner (role), status, last reviewed, next review.
2. If the KB does not give an answer, make sure that the AI agent writes "not found". If your `CLAUDE.md` does not have this rule, tell it to the AI agent.
3. Tell the AI agent to save the result in `lesson-3/results/owners.md`.
4. Find the pages without an owner in the table. Write the owner of these pages in your own words, with the rule from Lesson 03 theory, "Part 9: Ownership and freshness": "No owner: the manager of the team is the owner until a different person is named."
5. Find the pages with a next review date before today. Write them below the table.

### Exercise 3: Find a decision and its source

In this exercise, you find the decisions of the team and their sources.

#### Steps

1. With the `knowledge-base` connection, find the answers to these questions, with links and quotes:
    - How long does the team keep raw events, and why? Who made this decision, when, and what is its source?
    - What did the team agree about API keys for the Growth team? Is this decision in the page "Decision log"?
2. Tell the AI agent to save the result in `lesson-3/results/decisions.md`.
3. Open the source of each answer in the browser. Compare the answer of the AI agent with the text of the pages.
4. Below the answers, write two lines in your own words:
    - Which decision is not in the decision log, and who must add it.
    - Why this is a problem for the next person who sends a question to an AI agent.

## Part B: Find the project through direct connections

In Part B, you do the tasks of Part A again, but without the BAIN KB. The AI agent reads each system directly, with the `confluence`, `jira` and `gitlab` connections. A direct connection reads the live system, but only one system at a time.

You also read GitLab in Part B. The BAIN KB does not index GitLab. Thus, only the `gitlab` connection shows the code.

Before you start Part B, start a new conversation with the AI agent. At the top of the Claude Code panel, click the new conversation button (**+**). You can also type `/clear`. Do not use the conversation of Part A. A new conversation starts with empty context. Thus, the AI agent does not use what it found in Part A (Lesson 02, "Part 9: New chat and history").

In Exercises 4 to 7, tell the AI agent two limits:

- It must not use the `knowledge-base` connection.
- It must not use your results of Part A.

At the end of Part B, the AI agent compares your results of Part A and Part B.

### Exercise 4: Find the project in Confluence and Jira

In this exercise, you do Exercises 1 and 2 again, with the `confluence` and `jira` connections.

#### Steps

1. With the `confluence` and `jira` connections, tell the AI agent to find what these systems know about Umami.
2. Read the answer. Then send more questions about the topics that you want to know.
3. Send the questions of Exercise 2 again, with the same connections.
4. Tell the AI agent to save the result in `lesson-3/results/umami-overview-direct.md`, with a link for each fact.
5. Open the links in the browser. Make sure that each link opens the page or the ticket that the result names.

### Exercise 5: Find the decisions in Confluence and Jira

In this exercise, you do Exercise 3 again, with the `confluence` and `jira` connections.

#### Steps

1. With the `confluence` and `jira` connections, find the answers to the questions of Exercise 3, with links and quotes.
2. Tell the AI agent to save the result in `lesson-3/results/decisions-direct.md`.
3. Open the source of each answer in the browser. Compare the answer of the AI agent with the text of the pages and tickets.

### Exercise 6: Find what the code tells about Umami

In this exercise, you learn from the code what the product does. You send business questions. The AI agent reads the code for you with the `gitlab` connection.

#### Steps

1. With the `gitlab` connection, tell the AI agent to find what the product Umami can do. Also tell it to find the primary parts of the product. Tell it to answer in business language, without technical terms.
2. With the `gitlab` connection, send this question: "Does an API key of Umami have an end date?"
3. Tell the AI agent to give a link to the source of each answer.
4. Tell the AI agent to save the result in `lesson-3/results/umami-code.md`.
5. Below the result, write two lines in your own words:
    - What the pages of Confluence tell about the end date of API keys.
    - Which source shows how the product works (Lesson 03 theory, "Part 5", Code and configuration).

### Exercise 7: Find who works on the product

In this exercise, you find who works on the product, and how much work each person does. You send business questions. The AI agent reads the history of the code for you with the `gitlab` connection. It is not necessary to know how GitLab works.

#### Steps

1. With the `gitlab` connection, tell the AI agent to find who works on the product Umami. Also tell it to find how much work each person does.
2. Send more questions:
    - Who works on the product at this time, and who stopped?
    - Who works on the product each week, and who works on it only sometimes?
    - Which parts of the product does each person work on?
3. Tell the AI agent to answer in business language, without technical terms. Tell it to give the data for each statement.
4. Tell the AI agent to save the result in `lesson-3/results/team-activity.md`.
5. Tell the AI agent to compare the result with your results of Exercise 2 and Exercise 4:
    - Does each developer of the team work on the product?
    - Is each person who works on the product on the pages about the team?
6. Below the result, write in your own words who has the most effect on the product, and on which parts.
7. Tell the AI agent to find what this analysis does not show. For example, a person can make the design of the product, help other persons or write documentation. The history of the code does not show this work.

### Exercise 8: Compare the knowledge base with direct connections

In this exercise, the AI agent compares your results of Part A and Part B. Thus, you make sure that the information of the BAIN KB is also in Confluence and Jira.

#### Steps

1. Tell the AI agent to compare your results of Part A with your results of Part B:
    - Part A: `lesson-3/results/umami-overview.md`, `lesson-3/results/owners.md` and `lesson-3/results/decisions.md`.
    - Part B: `lesson-3/results/umami-overview-direct.md` and `lesson-3/results/decisions-direct.md`.
2. For each fact of Part A, tell the AI agent to find the same fact in Part B. Tell it to give the two links.
3. Tell the AI agent to also write these items:
    - The facts that only the BAIN KB found.
    - The facts that only the direct connections found.
    - The facts with different dates or different values in the two paths.
4. Tell the AI agent to save the result in `lesson-3/results/kb-vs-direct.md`. Tell it not to change your other files.
5. Below the result, write two lines in your own words:
    - When you use the BAIN KB first, and when you use a direct connection.
    - Why you read the code only with the `gitlab` connection.

The BAIN KB reads Confluence and Jira again only after an interval. Thus, the BAIN KB can show older data than the direct connection.

## Self-check: five questions

1. The BAIN KB and the `jira` connection give two different statuses for one ticket. Which status is correct, and why can the BAIN KB show a different status?
2. Which task do you start with the BAIN KB, and which task do you start with a direct MCP connection? Which task can you do only with a direct MCP connection?
3. A page tells a configuration value, and the code has a different value. Which one is correct, and what do you do with the page?
4. Why is a decision that is only in meeting notes or in Slack a problem for an AI agent?
5. You found a mistake on a page of a colleague. What do you do first?

## FAQs

| Question | Answer |
|---|---|
| Can I correct a page in the space `UMAMI` or a ticket in Jira? | No. In this lesson, you only read. All students share the pages and tickets |
| The BAIN KB does not find a page that I see in Confluence | The index can be late, or your query uses different words. Send the question again, with the words of the page. Then compare with the `confluence` connection, as in Part B |
| The BAIN KB finds no files of the code | This is correct. The BAIN KB indexes only Confluence and Jira. Read the code with the `gitlab` connection |
| The AI agent gives an answer without links | Tell it: "Give the link and the quote for each statement." An answer without a source is not a fact (rule 7) |

## Test task

### Before you start the test task

- You completed Exercises 1 to 8 of this file.
- VS Code is open with the Claude Code panel in **Auto** mode.
- The `becomeainative-os` project is open in VS Code.

The time for the test task is approximately 40 minutes. This task is not in the practice.

### The case

The Finance Analyst of Sandbox writes in Slack `#umami`:

> "Can I use the revenue from Umami for the monthly report of November? In which currency does Umami show the revenue?"

Your task is to answer the Finance Analyst. Use all sources of Umami: the BAIN KB, Confluence, Jira and GitLab. Give a source for each fact.

### Step 1: Find the sources

1. With the `knowledge-base` connection, send the question of the Finance Analyst to the AI agent.
2. Start a new conversation. With the `confluence`, `jira` and `gitlab` connections, find each source about the revenue, with links and dates. Tell the AI agent not to change anything.
3. For a source in GitLab, tell the AI agent to tell in business language what the code shows.
4. Open the pages and the tickets in the browser.

### Step 2: Write the answer

1. Write a full answer for the Finance Analyst in the file `lesson-3/lesson-3-test-results.md`. Use the format that you think is best.
2. In the answer, give your analysis of the project, and a link for each fact.
3. Make sure that each fact of the answer agrees with its source.

### Step 3: Send your results for review

1. Send this text to Claude Code:

    ```text
    Make sure that lesson-3/lesson-3-test-results.md has no secrets and no personal data. Then send it to the Slack cohort channel. Mention @channel in the message. Send me the link to the message.
    ```

2. Click the link. Make sure that the message is in the correct Slack channel. If it is not, tell Claude to correct it.

**Stuck?** Write the full text of the error in the cohort channel.

### How results are checked

The reviewer examines:

- The answer replies to the two questions of the Finance Analyst, and it gives an analysis of the project.
- The answer uses sources from Confluence, Jira and GitLab.
- Each fact has a link to its source, and agrees with this source.
- The student changed no page, no ticket and no file in Confluence, Jira or GitLab.

## How we engage the cohort to help each other on this lesson

Write all your questions and problems in the cohort channel. All the cohort sees them, and each answer helps all persons.

- **Read the channel before you write.** A different person can have the same problem and its solution.
- **Compare the two paths.** Each member writes one result of Exercise 8 in the channel. Find together where the BAIN KB and the direct connections give different answers.
- **The test task is individual.** Help each other with the method, not with the answer.
