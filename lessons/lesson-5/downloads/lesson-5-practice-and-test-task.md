# Lesson 05 practice & test task

## Contents

- [Before you start](#before-you-start)
- [How this practice works](#how-this-practice-works)
- [Exercise 1: Install skill-creator from the marketplace](#exercise-1-install-skill-creator-from-the-marketplace)
- [Exercise 2: Make a skill with skill-creator only](#exercise-2-make-a-skill-with-skill-creator-only)
- [Exercise 3: Install grill-me from GitHub and grill yourself](#exercise-3-install-grill-me-from-github-and-grill-yourself)
- [Exercise 4: Write two skills by hand](#exercise-4-write-two-skills-by-hand)
- [Exercise 5: Compare your skills](#exercise-5-compare-your-skills)
- [Folder layout after this lesson](#folder-layout-after-this-lesson)
- [Self-check: five questions](#self-check-five-questions)
- [FAQs](#faqs)
- [Test task](#test-task)
  - [Before you start the test task](#before-you-start-the-test-task)
  - [The case](#the-case)
  - [Step 1: Prepare confluence-digest](#step-1-prepare-confluence-digest)
  - [Step 2: Write the master skill](#step-2-write-the-master-skill)
  - [Step 3: Run the master skill](#step-3-run-the-master-skill)
  - [Step 4: Change one skill, not the master skill](#step-4-change-one-skill-not-the-master-skill)
  - [Step 5: Make the results file](#step-5-make-the-results-file)
  - [Step 6: Send your results for review](#step-6-send-your-results-for-review)

## Before you start

- You read the theory of Lesson 05.
- Your MCP connections to Jira and Confluence work (Lessons 01 and 04).
- VS Code is open with the Claude Code panel in **Auto** mode.
- The `becomeainative-os` project is open in VS Code.
- This file is in the folder `lesson-5/` in the root of your project.

## How this practice works

You get skills from three sources: a marketplace, skill-creator and GitHub. Then you write skills by hand. In the test task, you write a master skill that uses two of your skills.

Two rules apply to each exercise:

- After you install or write a skill, run it and look at how it works.
- After each change of a skill, restart VS Code fully: close all windows of VS Code, then open it again. A new conversation is not sufficient. Then type `/skills`, and make sure that the skill is in the list.

The AI agent saves the results of Exercises 2, 3 and 5 in `lesson-5/results/`. Each of these exercises names the file.

## Exercise 1: Install skill-creator from the marketplace

skill-creator is a skill of Anthropic that writes skills. It is in the plugin `skill-creator` in the official marketplace `claude-plugins-official`. Claude Code always has this marketplace. You do not add it.

### Steps

1. In the Claude Code panel, type `/plugin`. Select **Manage plugins**.
2. In the search field, type `skill-creator`.
3. Select the plugin `skill-creator` and install it. Install it for this project.
4. Restart VS Code fully.
5. Type `/skills`, and make sure that `skill-creator` is in the list.
6. Run the skill from the list. Type `/skill-creator`, and select the skill in the list. After its name, type this text and send it:

    ```text
    What can you do? Answer in five lines. Do not make files.
    ```

When you complete these steps, you see this result. `skill-creator` is in the `/skills` list, and it tells you what it can do.

### If Exercise 1 does not work

| Symptom | Fix |
|---|---|
| The plugin is not in the tab **Available** | Open the tab **Marketplaces**, and make sure that `claude-plugins-official` is in the list. Then send this prompt to the AI agent: "How do I install the skill-creator plugin from the official marketplace?" |
| `skill-creator` is not in `/skills` | Restart VS Code fully. A new conversation does not load the skills again |
| The name in the list is `skill-creator:skill-creator` | This is correct. A skill from a plugin has the name of the plugin as a prefix |

## Exercise 2: Make a skill with skill-creator only

You make a skill for a job of your selection with skill-creator. You do not write or edit the skill by hand. Then you measure the skill, and you see how much text skill-creator writes.

### Steps

1. Select one small job that you do each week, and that a skill can do for you. For example: meeting notes from your rough text, an answer to a typical email, or a checklist before a release. Use no confidential data.
2. Start skill-creator with its name in a prompt. Send this text, and replace the text in `< >`:

    ```text
    Use /skill-creator:skill-creator to make a project skill. The job: <one line>. Give me your questions one at a time. Do not run tests, benchmarks or a description optimization.
    ```

3. Answer the questions of skill-creator. Do not edit the files.
4. Restart VS Code fully. Type `/skills`, and make sure that your skill is in the list.
5. Run your skill with its name and an input. Type `/<name of the skill>`, then the input after the name, for example your rough text of a meeting. Read the result.
6. Send this text:

    ```text
    For the skill <name>, count the lines and the characters of SKILL.md and of all other files in its folder. Save a table in lesson-5/results/skill-creator-review.md: file, lines, characters. Do not change the skill.
    ```

7. Read `SKILL.md` fully. Then, below the table in `lesson-5/results/skill-creator-review.md`, write your answers to these questions:
    - How many minutes did you use to read the full skill?
    - Can you tell why the skill has each rule? Which rules did you not tell it to add?
    - Can you change one rule, and be sure that the other rules continue to work?

When you complete these steps, you see this result. Your skill is in the `/skills` list, and it did your job one time. `lesson-5/results/skill-creator-review.md` has the number of lines and characters of each file, and your answers. Compare the numbers with "A tip" in the Lesson 05 theory, in "Part 7: How the AI agent loads skills". Most good skills have about 50 lines, that is 1,000 to 2,000 characters.

### If Exercise 2 does not work

| Symptom | Fix |
|---|---|
| skill-creator puts the skill into `~/.claude/skills/` | Tell it to move the full folder of the skill into `.claude/skills/` of this project. Then restart VS Code fully |
| skill-creator starts tests or opens a browser | Stop it. Send: `No tests. Only write the skill.` |
| skill-creator gives all questions at the same time | Send: `One question at a time, please.` |
| Your skill is not in `/skills` | Make sure that the file `.claude/skills/<name>/SKILL.md` is in your project. Restart VS Code fully |

## Exercise 3: Install grill-me from GitHub and grill yourself

`grill-me` is a popular skill on GitHub. It interviews you about an idea or a plan, one question at a time, until the idea is clear. The AI agent finds `grill-me` on GitHub and installs it at the project level. You read the skill, and the AI agent examines its security. Then `grill-me` examines what you know about AI-native product management.

### Steps

1. Send this text:

    ```text
    Find the grill-me skill on GitHub. Give a table: repository, number of stars, last update, what the skill does. Sort by the number of stars. Install nothing.
    ```

2. Select the repository with the most stars. Open its link, and make sure that the skill is `grill-me`. In the Lesson 05 theory, read "Source 2: A file".
3. Send this text, and replace the text in `< >`:

    ```text
    Install the skill grill-me from <repository> at the project level. Do not run its scripts.
    ```

4. Open `.claude/skills/grill-me/SKILL.md` and all other files in the folder of the skill. Read them.
5. Send this text:

    ```text
    Analyze the security of the skill in .claude/skills/grill-me/. Tell me: which files it has, what it can read, write or run, which data it sends out of my computer, and if it has the field allowed-tools. Tell me step by step what each script does. Save the analysis in lesson-5/results/grill-me-security.md.
    ```

6. Compare the analysis with what you read. If you or the AI agent find a risk, tell the AI agent to delete the skill. Write about the risk in the cohort channel. Then select a different repository, and go back to step 3.
7. Restart VS Code fully. Type `/skills`, and make sure that `grill-me` is in the list.
8. Start `grill-me` with a usual prompt, without its command. The AI agent compares your prompt with the description of the skill and starts the skill itself. Send this text:

    ```text
    Grill me on AI-native product management. The topic: how I use skills in my work as a product manager. Ask one question at a time. After 10 questions, stop. Save a summary in lesson-5/results/grill-me-session.md: my strong answers, my weak answers.
    ```

9. Make sure that the AI agent used `grill-me`. If you are not sure, send: `Which skill did you use?`
10. Answer the 10 questions. Give examples from your work. Do not get the answers from the AI agent.
11. Read `lesson-5/results/grill-me-session.md`. In the Lesson 05 theory, read again the topics of your weak answers.

When you complete these steps, you see this result. `grill-me` is in `.claude/skills/grill-me/`, and it started from a usual prompt. `lesson-5/results/grill-me-security.md` names the repository, the files of the skill and its risks. `lesson-5/results/grill-me-session.md` has your strong and weak answers.

### If Exercise 3 does not work

| Symptom | Fix |
|---|---|
| The AI agent finds a different skill with almost the same name | Tell the AI agent to give the repository with the most stars and its link. Open the link, and make sure that the skill is `grill-me` |
| The AI agent wants to run a script to install the skill | Stop it. Tell it to show each file first, and then to copy only the files |
| `grill-me` does not start from your prompt | Start the prompt with the words "Grill me". If the skill does not start again, type `/grill-me` and the text of the prompt |
| The AI agent gives all questions at the same time | Send: `One question at a time, please.` |
| The skill is in `~/.claude/skills/` | Tell the AI agent to move the full folder into `.claude/skills/` of this project. Then restart VS Code fully |

## Exercise 4: Write two skills by hand

You write two short skills by hand, without skill-creator and without a template. The requirements below tell what each skill must do. How to write it is your decision. If you have a problem, read the Lesson 05 theory again: "Part 6: The structure of a skill" and "Source 3: Your own skill". In the test task, a master skill uses these two skills.

### Requirements for jira-digest

- The skill gives the open tickets of one Jira project, grouped by status.
- The input is the project key, for example `PRAC`. If the user does not give the key, the skill tells the user to give it.
- The skill gets the tickets with one JQL search through the Jira MCP.
- The output has one line for each ticket: the key, the summary and the assignee. At the end, the output gives the total of the JQL search.
- The skill does not count the tickets itself. It does not change tickets.
- If the skill finds no tickets, it writes "No open tickets" and stops.

### Requirements for confluence-digest

- The skill gives the pages of one Confluence space.
- The input is the space key, for example `PRAC`.
- The skill gets the pages with one CQL search through the Confluence MCP.
- The output has one line for each page: the title and the link. At the end, the output gives the total of the search.
- The skill does not count the pages itself. It does not change pages.
- If the skill finds no pages, it stops.
- Only you can start the skill. The AI agent must not start it itself.

### Requirements for the two skills

- Each skill has 30 lines or fewer.
- Each skill is at the project level, in `.claude/skills/<name>/SKILL.md`.
- The description of each skill tells what the skill does. It also tells when to use the skill.

### Steps

1. Write `jira-digest` and `confluence-digest` by hand. The AI agent can make the empty files for you, but you write the text.
2. Restart VS Code fully. Type `/skills`, and make sure that the two skills are in the list.
3. Start `jira-digest` with an instruction in `CLAUDE.md`. Add a line to the `CLAUDE.md` of your project, for example: `When I write "status check", use the jira-digest skill.` Use words that are not in the description of the skill. Save the file.
4. Restart VS Code fully. Send: `Status check for PRAC.`
5. Send a usual prompt: `Which pages are in the PRAC space?` `confluence-digest` must not start.
6. Start `confluence-digest` manually: `/confluence-digest PRAC`.
7. Make sure that the two skills work correctly:
    - Open two tickets from the result in Jira. Make sure that their status is not Done, and that the assignee is correct.
    - Run your own JQL search in Jira. Compare its total with the total in the result.
    - Open the space `PRAC` in Confluence. Compare its pages with the result.
8. If a result is not correct, change the skill. Add only the missing rule, and do not write the full skill again. Restart VS Code fully, and run the skill again.

When you complete these steps, you see this result. You have two skills of 30 lines or fewer, and they agree with all requirements. An instruction in `CLAUDE.md` started `jira-digest`. `confluence-digest` did not start from a usual prompt, and it started from `/confluence-digest`. The totals in the results agree with Jira and Confluence.

### If Exercise 4 does not work

| Symptom | Fix |
|---|---|
| The AI agent does not use `jira-digest` for "status check" | Make sure that you saved `CLAUDE.md`. Restart VS Code fully |
| The AI agent counts the tickets itself | Add the rule again in clear words: "Use the total of the JQL search." Restart VS Code fully |
| The CQL search gives an error | Send the full error message to the AI agent. Tell it to correct the search in your skill. Read the change. Restart VS Code fully |
| `confluence-digest` starts from a usual prompt | In the Lesson 05 theory, read "Part 6: The structure of a skill": the optional fields. Restart VS Code fully |

## Exercise 5: Compare your skills

1. Send this text:

    ```text
    Count the lines and the characters of SKILL.md of each skill in .claude/skills/. Save a table in lesson-5/results/skills-compare.md: skill, source (skill-creator, GitHub or by hand), lines, characters.
    ```

2. Below the table, write your answers:
    - Which skill can you read and change the fastest? Why?
    - Which skills do you keep for your work? Which skills do you delete?
3. If you delete a skill, tell the AI agent to delete its full folder. Restart VS Code fully. Do not delete `jira-digest` and `confluence-digest`, because the test task uses them.

When you complete these steps, you see this result. `lesson-5/results/skills-compare.md` shows the number of lines and characters of each skill, and your decisions.

## Folder layout after this lesson

```text
becomeainative-os/
  CLAUDE.md
  .claude/
    skills/
      <your skill from skill-creator>/
      grill-me/
      jira-digest/SKILL.md
      confluence-digest/SKILL.md
      project-digest/SKILL.md
  lesson-5/
    lesson-5-test-results.md
    results/
      skill-creator-review.md
      grill-me-security.md
      grill-me-session.md
      skills-compare.md
  outputs/project-digest-<date>-<time>.md
```

## Self-check: five questions

1. How long is the skill from skill-creator, and how long are your skills by hand? Which skill is easier to change?
2. Which risks did the AI agent find in `grill-me`? How did you make sure that the analysis is correct? Which of your answers to `grill-me` were weak?
3. Which ways to start a skill did you use? Which way do you select for a skill that changes data?
4. Why must you restart VS Code after each change of a skill?
5. Which of your skills do you use in your work first? Why?

## FAQs

| Question | Answer |
|---|---|
| The theory does not recommend skill-creator. Why do we use it? | You see the result. Then you know why a short skill by hand is better. |
| A skill has thousands of stars. Can I install it without a security analysis? | No. Stars show that many persons use it. They do not show that the current version is safe. |
| Why do I restart VS Code? A new conversation is faster. | When Claude Code starts, it loads the skills. A new conversation does not load them again. |
| Can a master skill start a skill with `disable-model-invocation: true`? | No. Only you can start this skill. |
| The AI agent counted the tickets itself. Is that a problem? | Yes. LLMs are bad at math. The skill must get each number from Jira, for example the total of a JQL search. |

## Test task

### Before you start the test task

- You completed Exercises 1 to 5 of this file.
- `jira-digest` and `confluence-digest` from Exercise 4 are in `.claude/skills/` of your project.
- VS Code is open with the Claude Code panel in **Auto** mode.
- The `becomeainative-os` project is open in VS Code.

You can do the test task in approximately 20 minutes.

### The case

Your manager sends you this message: **"Give me one short overview of the project PRAC: the open tickets and the pages of its space."**

From Exercise 4, you have a skill for each part. In this test task, you write a master skill that uses them. A master skill does a large job with other skills. It does not copy their steps. It tells the AI agent which skills to use and in which sequence.

### Step 1: Prepare confluence-digest

1. Open `.claude/skills/confluence-digest/SKILL.md`, and remove the line `disable-model-invocation: true`. A master skill cannot start a skill that only you can start.
2. Save the file. Restart VS Code fully.

### Step 2: Write the master skill

1. Send: `Make the empty file .claude/skills/project-digest/SKILL.md. Do not write text in it.`
2. Write the skill by hand. It must have these items:
    - The name `project-digest`.
    - A description that tells what the skill does, and that only you can start it.
    - The field `disable-model-invocation: true`.
    - The input: the project key, for example `PRAC`. The Jira project and the Confluence space have the same key.
    - The steps: use the `jira-digest` skill, then use the `confluence-digest` skill, then write the file `outputs/project-digest-<YYYY-MM-DD>-<HH-MM>.md`.
    - The content of the file: a summary of three sentences, the result of `jira-digest` and the result of `confluence-digest`.
    - The rules: the skill does not get tickets or pages itself. It does not change the results of the two skills.
    - The stop rule: if one of the two skills does not work, the master skill stops. It writes which skill did not work.
3. Keep the skill to 30 lines or fewer. Save it.
4. Restart VS Code fully. Type `/skills`, and make sure that the three skills are in the list.

### Step 3: Run the master skill

1. Send: `/project-digest PRAC`
2. In the panel, look at how the AI agent starts `jira-digest` and then `confluence-digest`.
3. Open the report in `outputs/`, and read it.

### Step 4: Change one skill, not the master skill

1. In `jira-digest`, add this rule: "Sort the tickets by priority, the highest first. Show the priority on each line." Save the file.
2. Restart VS Code fully.
3. Send `/project-digest PRAC` again.
4. Compare the two reports. The Jira part changed, but you did not change `project-digest`.

### Step 5: Make the results file

In the `lesson-5` folder, make the file `lesson-5-test-results.md` with this text:

```markdown
# Lesson 05 test results

- Date:

## 1. Invocation
(the command that you typed to run project-digest)

## 2. Answer
(two sentences for your manager: how many tickets are open, as Jira counted them, and which ticket is the most important and why)

## 3. How the skills started
(which skills the AI agent started, and in which sequence)

## 4. The change test
- The rule that I added to jira-digest:
- What changed in the second report (quote):

## 5. Verification notes
| # | What I checked | Where | Result | Correction, if any |
|---|---|---|---|---|
(a minimum of: the total of your own JQL search against the total in the report, one ticket that you opened in Jira, the pages of the space against the report)
```

Fill all sections. For section 5, compare the report with Jira and Confluence.

### Step 6: Send your results for review

1. Send this text to Claude Code:

    ```text
    Add a section "6. Files" to the end of lesson-5/lesson-5-test-results.md. In it, put the full text of each of these files in its own code block, with the file path as a heading: .claude/skills/project-digest/SKILL.md, .claude/skills/jira-digest/SKILL.md, .claude/skills/confluence-digest/SKILL.md and the two reports of project-digest in outputs/. Do not change the other sections.
    ```

2. Make sure that the file has no credentials and nothing from your company.
3. Send this text to Claude Code:

    ```text
    Make sure that lesson-5/lesson-5-test-results.md has no secrets and no personal data. Then send it to the Slack cohort channel. Mention @channel in the message. Send me the link to the message.
    ```

4. Click the link. Make sure that the message is in the correct Slack channel. If it is not, tell Claude to correct it.

**Stuck?** Write the full error message in the cohort channel.