# Lesson 02: Claude Code for managers

## At a glance

### You arrive with

- The result of Lesson 01:
    - VS Code and Claude Code, installed on your computer. You are signed in to Claude Code, and the mode indicator shows **Auto**.
    - Your `becomeainative-os` project with the `lesson-1` folder and `.mcp.json`
    - Basic knowledge of Markdown

### You leave with

- Control the AI agent: give it your rules and instruction files, read its steps, stop it, answer its questions and give it new tasks while it works.
- Manage the risk and the cost: set the permission modes and safeguards, control the context, continue from a handoff, and select a model and an effort.

## Contents

- [How an AI agent works](#how-an-ai-agent-works)
  - [Part 1: Why you must know what you installed](#part-1-why-you-must-know-what-you-installed)
  - [Part 2: The four parts of an AI agent](#part-2-the-four-parts-of-an-ai-agent)
    - [Harness](#harness)
    - [LLM (the model)](#llm-the-model)
    - [Instructions and context](#instructions-and-context)
    - [Tools](#tools)
    - [An example from real life](#an-example-from-real-life)
    - [An AI agent is modular](#an-ai-agent-is-modular)
  - [Part 3: Layers of configuration](#part-3-layers-of-configuration)
  - [Part 4: The stop button](#part-4-the-stop-button)
    - [Continue after the stop](#continue-after-the-stop)
  - [Part 5: Safeguards](#part-5-safeguards)
    - [1 Yes](#1-yes)
    - [2 Yes, allow ...](#2-yes-allow-)
      - [In the session](#in-the-session)
      - [In the project](#in-the-project)
      - [For all projects (user level)](#for-all-projects-user-level)
    - [3 No](#3-no)
    - [Tell Claude what to do instead](#tell-claude-what-to-do-instead)
  - [Part 6: Tools of the AI agent](#part-6-tools-of-the-ai-agent)
    - [Allow these tools in this project](#allow-these-tools-in-this-project)
  - [Part 7: Permission modes](#part-7-permission-modes)
    - [Auto](#auto)
    - [Edit automatically](#edit-automatically)
    - [Plan](#plan)
    - [Manual](#manual)
    - [Bypass permissions](#bypass-permissions)
    - [In all modes](#in-all-modes)
  - [Part 8: Models, tokens and cost](#part-8-models-tokens-and-cost)
    - [Tokens](#tokens)
    - [How you pay for tokens](#how-you-pay-for-tokens)
    - [Limits of a Claude plan: the 5-hour window and the 7-day window](#limits-of-a-claude-plan-the-5-hour-window-and-the-7-day-window)
    - [Models](#models)
    - [Effort](#effort)
    - [Our recommendation for daily work](#our-recommendation-for-daily-work)
  - [Part 9: New chat and history](#part-9-new-chat-and-history)
  - [Part 10: Context management: context is the king](#part-10-context-management-context-is-the-king)
    - [The context window](#the-context-window)
      - [The `/context` command](#the-context-command)
    - [Where the AI agent gets the context](#where-the-ai-agent-gets-the-context)
      - [System instructions of Claude Code](#system-instructions-of-claude-code)
      - [Your instruction files and memory](#your-instruction-files-and-memory)
        - [User `CLAUDE.md`](#user-claudemd)
        - [`MEMORY.md` (auto memory)](#memorymd-auto-memory)
        - [Project `CLAUDE.md`](#project-claudemd)
        - [How the files work together](#how-the-files-work-together)
      - [Your prompt](#your-prompt)
      - [The files and images that you add](#the-files-and-images-that-you-add)
        - [Type `@` and the file name](#type--and-the-file-name)
        - [Drag a file into the prompt box with Shift](#drag-a-file-into-the-prompt-box-with-shift)
        - [The file that is open in the editor](#the-file-that-is-open-in-the-editor)
        - [The file name in your words](#the-file-name-in-your-words)
      - [Skills and MCP tools](#skills-and-mcp-tools)
      - [The tool results](#the-tool-results)
      - [The conversation](#the-conversation)
    - [See what is in the context](#see-what-is-in-the-context)
  - [Part 11: How to write `CLAUDE.md`](#part-11-how-to-write-claudemd)
    - [The six sections](#the-six-sections)
    - [Best practices](#best-practices)
    - [An example of `CLAUDE.md`](#an-example-of-claudemd)
    - [Other Markdown files as instructions](#other-markdown-files-as-instructions)
  - [Part 12: The AI agent shows each step in the chat](#part-12-the-ai-agent-shows-each-step-in-the-chat)
    - [How to read the log](#how-to-read-the-log)
  - [Part 13: Questions from the AI agent](#part-13-questions-from-the-ai-agent)
  - [Part 14: A new task before the previous task is done](#part-14-a-new-task-before-the-previous-task-is-done)
    - [Correct the current task](#correct-the-current-task)
    - [Give the next task in the same conversation](#give-the-next-task-in-the-same-conversation)
    - [Start a parallel task in a new conversation](#start-a-parallel-task-in-a-new-conversation)
  - [Part 15: When something goes wrong, find the part](#part-15-when-something-goes-wrong-find-the-part)
  - [Deeper dive later in the intensive](#deeper-dive-later-in-the-intensive)
- [Glossary](#glossary)
  - [Popular commands](#popular-commands)
- [Test task](#test-task)

## How an AI agent works

Do not only read this section. Open VS Code with your `becomeainative-os` project, and open the Claude Code panel. Keep the panel next to this lesson. When a part tells you about a button, a menu or a command, find it in the panel and try it. You learn the AI agent faster with your hands than with your eyes.

### Part 1: Why you must know what you installed

In Lesson 01, you installed an AI agent and connected it to five systems. Today you learn what you installed, because you cannot control what you do not understand.

Do not use what you learned about AI in a browser tab. An AI assistant and an AI agent are different systems, and you work with them in different ways. Do not move your methods from one to the other.

Claude Code runs a model in a work cycle with tools. The model proposes a step, Claude Code runs it with a tool, and the model reads the result. This cycle continues until the task is done. It opens your files, searches folders and writes drafts directly into your documents. Most manager work is files: notes, PRDs, decision logs, transcripts and exports.

An AI agent helps a manager with these tasks:

- **Drafts from your own material.** The AI agent reads your notes, transcripts and exports. Then it writes the first draft of a PRD, a status update or a decision log.
- **Many sources in one task.** It compares many documents and shows where they do not agree. By hand, this task is much slower.
- **One method for each task that you do again and again.** You write the method in a file one time. Then the AI agent follows it each week. A subsequent lesson makes these methods into skills.
- **Your systems in one place.** In subsequent lessons, the AI agent uses the systems from Lesson 01, for example Jira, Confluence and Slack.
- **Results that you can examine.** Each statement in a draft can cite a source file, and each change shows in a diff.

Claude Code is a good AI agent for an AI-native manager. These are the causes:

- **It works on files, not only in a chat.** Your documents stay in your project folder, in Markdown that all tools can open.
- **It shows each step.** You see each file that it reads, each tool call and each line that it changes.
- **You set the limits.** If the risk of a task is low, let the AI agent do more without a question. Permission modes give you this control.
- **It knows your rules.** You write your role, your style and your limits in a file one time. Each new session reads this file.
- **It stays with you for all of the intensive.** Today it writes a summary of one file. In subsequent lessons, with MCP, skills and hooks, it does a full weekly procedure.
- **Your engineers use the same tool.** Claude Code is also an AI agent for code. You use the same files, the same Git and the same terms as your development team.
- **Your method also works in other AI agents.** Other AI agents have the same parts and controls.

Three things change for you:

- **You understand who does what.** When something goes wrong, you know which part to correct: the context, the permission, the instruction or the tool.
- **You manage the context.** You decide which instructions, files and notes the AI agent reads in each session. Clean context gives better results.
- **You see before you trust.** For each change in a file, you see which lines the AI agent added and removed. If you do not like a change, you can undo it in seconds.

Your speed with an AI agent follows a learning curve, the J-curve. At first, you work more slowly than by hand. Then you work much faster.

![The J-curve: work speed first decreases below work by hand, then increases with practice.](https://becomeainative.io/lessons/lesson-2/img/lesson-2/ai-agent-learning-curve.png)

The slow start has a cause. You learn three skills at the same time: you write a brief, you examine the result and you correct the AI agent. You also learn which tasks the AI agent does correctly and which tasks it does badly. This slow start is usual. It does not show that the AI agent or your method is bad.

Do these three things on the curve:

1. Start with small tasks that have a low risk, for example a summary of one file. Do not measure your speed at this time.
2. When you give the same correction two times, write it into your rules file.
3. After approximately five drafts of one type, the AI agent writes in minutes what took you an hour. Then try a larger task.

Each mistake of the AI agent shows a control that you must set. [Part 15](#part-15-when-something-goes-wrong-find-the-part) tells you which part to correct. If you stop at the bottom of the curve, you pay the cost and do not get the result. A subsequent lesson tells you more about the J-curve for you and for your team.

### Part 2: The four parts of an AI agent

In Lesson 01, you learned that an AI agent has four parts.

#### Harness

- **What it is in our setup:** The Claude Code extension in VS Code is the harness.
- **What it does:** It runs the AI agent work cycle. Before each step, it collects the context: its own system instructions, your instruction files, your prompt, the conversation and the list of available tools. It sends this context to the model and gets back a proposal. Then it examines each proposed tool call against your permission mode and your permission rules. A permitted call runs immediately. Other calls wait for your approval, or the harness blocks them.

    The harness also keeps the AI agent in your project folder, the working directory, and asks before it goes outside. It shows you each tool call and each diff in the panel. It saves each session, so that you can open it again later. When the context window is full, it makes a summary of the old conversation. Thus, the same model works very differently in different harnesses.

#### LLM (the model)

- **What it is in our setup:** A Claude model, for example Opus or Sonnet. Claude Code selects it for you.
- **What it does:** It reads all of the context on each step and proposes the next step. The proposal is an answer to you, or one or more tool calls with inputs. For example, the model proposes "Read `sources/host-calendar-sync/notes-host-calendar-sync.md`" or "In `INDEX.md`, replace this line with that line". The model does not run the tools itself.

    The model has no memory between steps. It knows only what is in the context at this time. It writes the text that best fits the context, so it can write a false statement that looks correct. Different models give different results.

    This lesson does not explain LLMs in detail. Subsequent lessons explain how an LLM works and how to select one. Until then, use the default Claude model that Claude Code selects for you.

#### Instructions and context

- **What it is in our setup:** Your prompt, your instruction files, the files that you name, the conversation and the tool results.
- **What it does:** It is all that the model can see when it decides. The model has no other source of information. Thus, the quality of the context sets the quality of the result. You control three parts of the context: your prompt, your instruction files and the files that you name in the prompt. Two more parts become larger during the session: the conversation and the tool results.

    The context window has a size limit. When the window is full, Claude Code makes a summary of the old conversation, and some details go out of the context. Thus, give the context that the task needs, and not more. [Part 10](#part-10-context-management-context-is-the-king) tells you how to control the context.

#### Tools

- **What it is in our setup:** File tools (read, search, edit, write), shell commands, web tools and, in subsequent lessons, MCP tools.
- **What it does:** The tools do the real work: they read a file, change a file or run a command. Each tool has a name and inputs, for example Read with a file path, or Edit with the old text and the new text. The harness runs the tool and gives the result back to the model as text: the content of a file, a list of search results or an error. If a tool gives an error, the model reads it and can try a different step.

    The tools change real things. An edit changes the file on your disk immediately. A shell command can move or delete files. A web tool sends data out of your computer. In subsequent lessons, MCP tools also read and change records in Jira, Confluence and Slack. Thus, each tool call needs a permission, and each change needs your review.

#### An example from real life

An AI agent works like a human body:

- The harness is the body and its nervous system. It carries the signals between the brain and the hands. It also has reflexes. If a hand touches a hot surface, the body pulls the hand back before the brain decides. The permissions of the harness stop risky actions in the same way.
- The LLM is the brain. It thinks and decides, but it cannot touch anything itself. In this example, the brain also forgets all of the day each night.
- The instructions and context are what the eyes see and the ears hear at this moment. The brain decides only from this information. If the eyes see an old map, the brain makes a wrong decision that looks correct.
- The tools are the hands. They do the real work: they take, write and move things. A hand can also break something that you cannot repair.

You cannot make the brain more intelligent. But you control what the eyes see, which reflexes stop the hands, and what you examine after the hands do the work. The rest of this lesson shows you how to do this in Claude Code.

![A human body shows the four parts of an AI agent: brain (LLM), eyes and ears (instructions and context), hands (tools), and body with its nervous system and reflexes (harness).](https://becomeainative.io/lessons/lesson-2/img/lesson-2/ai-agent-human-body.png)

#### An AI agent is modular

Here the body example stops. You cannot replace one part of a body, but you can replace each part of an AI agent. The four parts are separate modules. You can replace the full AI agent, or you can configure or replace only one part:

- The full AI agent: change from Claude Code to a different AI agent. Your Markdown files, your sources and your method stay the same.
- The harness: use the same Claude model in a different program, for example Claude Code in the terminal or in the desktop app. Some harnesses, for example Cursor, let you select models from different vendors.
- The LLM: use a different Claude model for a different task. Subsequent lessons show how to select one.
- The instructions and context: change your instruction files, the files that you name and your brief. You change this part most frequently, and it costs nothing.
- The tools: add MCP servers to connect new systems, for example the Jira and Slack connections from Lesson 01. A subsequent lesson shows how to add and limit tools.

Thus, when one part gives bad results, change only that part. [Part 15](#part-15-when-something-goes-wrong-find-the-part) helps you find the part.

The model is the only part that "thinks", but it can only **propose**. The harness decides. Because of this split, you can trust an AI agent with your files: the permissions and the reviews stop the mistakes of the model.

### Part 3: Layers of configuration

Configuration is all that you tell the AI agent one time, and it then uses in each conversation. It is a set of files. Claude Code reads them at the start of each conversation, before you type your first message.

Configuration has these types:

- Instructions: who you are, how you write and what the AI agent must never do. They are in `CLAUDE.md`. [Part 11](#part-11-how-to-write-claudemd) explains this file.
- Settings: what the AI agent can do without a question, for example permission rules and the default mode. They are in `settings.json`.
- Connections to your systems: MCP servers. In Lesson 01, you put them in `.mcp.json` in the project folder.
- Skills and commands. Subsequent lessons teach them.

Why you need configuration: without it, each conversation starts from zero. You must tell the AI agent your role, your rules and your limits again each time. With configuration, you write them one time, and each conversation starts with them.

Why you must control configuration: it changes each conversation, but you do not see it in the chat. A good rule makes all of your work better. A wrong or old rule makes all of your work worse, and you do not know why. Thus, you must know which configuration exists and where it is.

**Layers.** Claude Code reads configuration from more than one place. Each place is a layer. In this lesson, you use two layers:

| Layer | Where it is | It applies to |
|---|---|---|
| User | The `.claude` folder in your user folder | You, in all of your projects |
| Project | `CLAUDE.md`, the `.claude` folder and `.mcp.json` in the project folder | All persons who work in this project |

Claude Code has two more layers. The organization layer is a system folder that your IT team controls. The local layer holds your personal settings for one project. To make this lesson simple, we do not use them.

When the two layers give the same setting, the project layer wins. Instructions work differently. Claude Code loads all `CLAUDE.md` files together. If two files do not agree, Claude can follow either of them.

![The user layer applies to all projects. Each project has instructions, settings and connections that its conversations use.](https://becomeainative.io/lessons/lesson-2/img/lesson-2/claude-code-configuration-layers.png)

Our recommendation: always use the project layer. Put your instructions, settings and connections in the project folder. This gives you four advantages:

- You see all of the configuration of the project in the Explorer, in one folder.
- A rule for one project does not change a different project.
- When you share the project, or put it in Git in a subsequent lesson, the configuration goes with it.
- When something goes wrong, you look in one place.

Do not put a rule in the user layer only because it is quicker. A rule in your user `CLAUDE.md` changes all of your projects, and after some weeks you forget that it is there.

VS Code also has its own settings for the extension, for example the mode of a new conversation. They are in the VS Code user settings, not in the project folder.

> **CAUTION:** Do not share your project folder before a subsequent lesson shows you how. Your `.mcp.json` from Lesson 01 contains your tokens.

### Part 4: The stop button

While the AI agent works, the prompt box shows the stop button. Click it to stop the current work immediately.

![The prompt box while the AI agent works. The text box shows "Queue another message...", and the stop button is at the bottom right.](https://becomeainative.io/lessons/lesson-2/img/lesson-2/stop-button.png)

Click the stop button when the AI agent does one of these things:

- It edits a file that you did not name.
- It goes in a wrong direction, for example it writes a long document when you asked for a list.
- It does the same step again and again.
- It wants to do something that you do not understand.

A stop is not an error. A manager stops a colleague who goes in a wrong direction. Do the same with the AI agent, and do it early.

#### Continue after the stop

The stop button stops the work but does not undo it. The edits from before the stop stay in the files. The conversation also stays: the AI agent remembers your task and each step that it did.

After a stop, do these steps:

1. Find out what changed. Ask in the chat, for example: `List each file that you created or changed before I stopped you. Do not change anything.`
2. Find out why the AI agent did the work wrong. Ask in the chat, for example: `Explain what you did before I stopped you, and why you decided to do it. Do not change anything.` The answer often shows the cause: an unclear brief, a missing file or a wrong guess. Then you can correct the cause, not only the result.
3. Tell the AI agent what to do with the changes: continue, stop or roll back the changes.

A correction after a stop has the same rules as a good brief: one clear instruction, the files to use, and the result that you expect. "No, not like this" gives the AI agent no information. As a result, it guesses again.

### Part 5: Safeguards

Before the AI agent runs a command or uses a tool, Claude Code can ask for your permission. Nothing runs until you answer. This question is your safeguard. You see it many times each day, so learn to read it fast.

A command is an instruction for your computer. For example, `touch` makes a file, `ls` lists files and `rm` deletes files. The AI agent uses commands to run scripts and to change files.

![The permission question of Claude Code for a bash command, with the options Yes, Yes and allow for all projects, No, and a text box to tell Claude what to do instead.](https://becomeainative.io/lessons/lesson-2/img/lesson-2/permission-question-bash.png)

The question has these parts:

- The title names the tool, for example **Allow this bash command?**
- The command that the AI agent wants to run.
- A short description of the command. The AI agent writes it, so make sure that it agrees with the command.
- The options.

#### 1 Yes

The command runs one time. For the next command, Claude Code asks again.

Select it when you expected this command and you understand what it does.

#### 2 Yes, allow ...

The command runs. Claude Code also saves a permission rule and does not ask again about this command. The text of the option tells where the rule applies. There are three types.

Select one only for a command that cannot cause damage and that you see many times, for example `ls`. Select the smallest type that is sufficient.

##### In the session

The rule applies only to the current session. When you start a new session, Claude Code asks again. This type has the smallest risk.

##### In the project

The rule applies to all sessions in this project folder. Claude Code saves it in the settings of the project. In a different project, Claude Code asks again. This is the project layer of [Part 3](#part-3-layers-of-configuration).

##### For all projects (user level)

The rule applies to all sessions in all of your projects. Claude Code saves it in your user settings. This is the user layer of [Part 3](#part-3-layers-of-configuration). This type has the largest risk, because one click changes the permissions of each project on your computer.

#### 3 No

The command does not run.

Select it when you did not expect the command, or when you do not understand it.

#### Tell Claude what to do instead

The command does not run. The AI agent reads your text and continues.

Use it when you want a different action, for example: `Do not delete files. Show me the list of files first.`

You can also use it to get fewer questions. `becomeainative-os` is your test project for the intensive, so you can accept some risk with its files. When you get a permission question in this project, type this text in the box:

```text
Allow all commands like this in this project. This is my test project, so I permit you to use any tools in it without a question to me.
```

Then the AI agent asks fewer questions while it works on the files of `becomeainative-os`.

> **CAUTION:** Be careful with this permission in a project with your real work files. Usually, Claude Code does not delete files if you do not tell it to do so. But when you allow all commands, a deletion without a question can occur.

### Part 6: Tools of the AI agent

The AI agent does its work with tools. Each tool does one type of action. You see the tool name in each step in the chat and in each permission question of [Part 5](#part-5-safeguards). These tools are the most frequent:

- **Read** reads a file. A manager uses it to give the AI agent the facts. Example: `Read the meeting notes in sources/ and list the decisions.`
- **Edit** changes a part of a file. A manager uses it to correct a document and keep the rest. Example: `In the PRD, change the target date to 15 March.`
- **Write** makes a new file. A manager uses it to get a draft as a file, not as a chat message. Example: `Write the status update to drafts/status-update.md.`
- **Glob** finds files by name. A manager uses it to find documents in a large folder. Example: `Find all files about the loyalty pilot.`
- **Grep** finds text in files. A manager uses it to find each place that names a fact. Example: `Find each file that gives a launch date.`
- **Bash** runs commands on your computer. A manager uses it to download, move and rename files. Example: `Download the four practice files into sources/.`
- **WebFetch** reads a web page. A manager uses it to read an article or a page of documentation. Example: `Read this page and give me the three main points: <URL>.`
- **WebSearch** searches the web. A manager uses it to find current information. Example: `Find the current price of the Claude Pro subscription.`

#### Allow these tools in this project

`becomeainative-os` is your test project, so you can let the AI agent use these tools without a question. Send this text:

```text
In .claude/settings.json of this project, add permission rules that allow these tools without a question: Read, Edit, Write, Glob, Grep, Bash, WebFetch, WebSearch. Do not change other settings.
```

The rules are in the project layer of [Part 3](#part-3-layers-of-configuration). They apply only to `becomeainative-os`. If Claude Code still asks, restart VS Code.

> **CAUTION:** Be careful with this setting in a project with your real work files. Usually, Claude Code does not delete files if you do not tell it to do so. But the rule `Bash` permits all commands, so a deletion without a question can occur.

### Part 7: Permission modes

A permission mode sets which actions run without a question to you. You see the mode indicator at the bottom of the prompt box. Click it to change the mode.

![The mode menu, opened from the mode indicator at the bottom of the prompt box, with the modes Manual, Edit automatically, Plan and Auto. Auto is selected. Below the modes is the Effort setting.](https://becomeainative.io/lessons/lesson-2/img/lesson-2/permission-modes-menu.png)

During the intensive, use only **Auto**. After the intensive, when you think that you need fewer guardrails, you can change to **Edit automatically**. **Plan** and **Manual** are outdated for current models, and we do not recommend them.

#### Auto

In Auto mode, Claude approves the actions that pass a safety check, and it pauses for all risky actions. A second model, the classifier, examines each action before it runs. Usual reads, edits and commands in your project run without a question. If an action looks risky, Claude Code stops and asks you. For example, a deletion of many files or an action outside your project is risky. New sessions start in Auto (since Claude Code 2.1.283, as of October 2026). The official documentation says that Auto "reduces permission prompts but does not guarantee safety". Thus, examine each important change after Claude Code applies it.

Example of use: you ask the AI agent to read four sources and write a PRD draft. It reads, writes and corrects the draft without questions. You examine only the result.

#### Edit automatically

In this mode, Claude edits files without a question. Reads, file edits and usual file commands in your project folder run immediately, for example a command that makes a folder. The classifier of Auto mode does not examine these edits. Other commands still wait for your approval, for example a script or a download. As a result, you get fewer checks on your files, but more questions about commands than in Auto. Use this mode after the intensive, when you know how the AI agent works and you need fewer guardrails.

Example of use: you ask the AI agent to change the format of 30 meeting notes in your project. It edits all 30 files without a check. You examine the files at the end.

#### Plan

In Plan mode, Claude reads and does research, then shows a plan and waits. It cannot edit files until you approve the plan. The plan opens as a document, and you can add comments to it. This mode was necessary for earlier models, which were less smart. They frequently started a large change in a wrong direction, so a review of the plan before the work prevented errors. Current models make good plans themselves, and they ask when a task is not clear. Thus, Plan mode is outdated, and we do not recommend it. If you want to see the approach first, tell the AI agent in Auto mode: `Show me your plan first, and wait for my approval.`

Example of use: you want to approve a map of the new folder structure before the AI agent moves 200 files.

#### Manual

In Manual mode, Claude asks for your approval before each edit and each command. Only reads run without a question. You see each change before it occurs, but you answer many questions on each task. This mode was necessary when AI agents made more errors. With current models, Manual mode makes the work slow, and it does not make the work much safer. After many questions, a tired person clicks **Yes** without reading. Thus, Manual mode is outdated, and we do not use it in the intensive.

Example of use: you let the AI agent work in a folder with important files for the first time, and you want to see each action before it runs.

#### Bypass permissions

In this mode, all actions run with no questions and no checks. There is no classifier and no approval. This mode is for isolated containers. A container is a separate computer environment that has no access to your files and accounts. Developers use containers for automated work. Never use this mode on your own computer. One wrong command can delete files or send data, and nothing stops it.

Example of use: a developer runs the AI agent in a container to correct tests at night. After the work, the container is deleted.

#### In all modes

Nothing can undo an action that goes out of your computer, for example a sent message. In subsequent lessons, you approve each such action before it occurs. Also, never let the AI agent edit your sources.

### Part 8: Models, tokens and cost

This part tells you what you pay for, so that you understand the limits of your Claude plan. At the end of this part, you get our recommendation for your daily work.

#### Tokens

A model does not read words. It reads tokens: small parts of words. In English, one token is approximately four characters, or three quarters of a word. One page of text is approximately 500 to 700 tokens. Other languages frequently need more tokens for the same text.

The model uses tokens in two directions:

- Input tokens: all that the model reads on a step, for example instructions, files and the conversation.
- Output tokens: all that the model writes, for example answers, tool calls and new file content. Output tokens cost more than input tokens.

On each step, the model reads all of the context again. Thus, a file that the AI agent read at the start costs tokens on each step after it. A long conversation costs more for each new message than a short conversation.

![The context grows with each step. The model reads all of it again.](https://becomeainative.io/lessons/lesson-2/img/lesson-2/conversation-context-stack.png)

#### How you pay for tokens

There are two ways:

| Way | How it works |
|---|---|
| Subscription plan | A fixed price for each month, for example the plan for $20 from Lesson 01. The plan has use limits. When you get to a limit, you wait until it resets, or you change to a larger plan |
| API key | You pay for each token that you use. Companies frequently use this way |

With an API key, the price is for each million tokens. Output tokens cost five times more than input tokens. These are the prices of the current models (as of October 2026):

| Model | Input: $ for 1 million tokens | Output: $ for 1 million tokens |
|---|---|---|
| Fable 5.1 | 10.00 | 50.00 |
| Opus 5.5 | 4.00 | 20.00 |
| Sonnet 5.5 | 2.00 | 10.00 |
| Haiku 5.5 | 0.10 | 0.50 |

How much text is 1 million tokens? In English, it is approximately 750,000 words, or 1,500 to 2,000 pages. Some examples from popular books:

- "Harry Potter and the Philosopher's Stone" has approximately 77,000 words. Thus, 1 million tokens is approximately 10 books of this size.
- All seven "Harry Potter" books have approximately 1,080,000 words. That is approximately 1.4 million tokens.
- "The Lord of the Rings" has approximately 480,000 words. That is approximately 650,000 tokens.

For example, one step reads 50,000 tokens and writes 5,000 tokens. This step costs $0.75 on Fable 5.1, $0.30 on Opus 5.5, $0.15 on Sonnet 5.5 and less than $0.01 on Haiku 5.5.

On a subscription plan, you do not pay for each token. But the plan counts the tokens of each model against your limits. Thus, a model with a higher price uses your limits faster.

#### Limits of a Claude plan: the 5-hour window and the 7-day window

A Claude subscription plan has two limits:

- The 5-hour window: the window starts with your first message. When you use all of the limit, you wait until 5 hours after that first message. Then your next message starts a new window.
- The 7-day window: this limit is for all of your use in one week. When you use all of this limit, you wait until the weekly reset, also if your 5-hour window is not full.

Claude (the chat app) and Claude Code use the same limits. Thus, a chat on claude.ai also decreases the limits for Claude Code.

To see your use and the time of each reset, type `/usage` in the prompt box. Then select `/usage` in the list of commands.

![The prompt box with the text "/usage". Above it, the Slash Commands list shows /usage first.](https://becomeainative.io/lessons/lesson-2/img/lesson-2/usage-command.png)

Claude Code shows your plan and two bars:

- Session (5hr): the part of the 5-hour window that you used, and the time when it resets.
- Weekly (7 day): the part of the 7-day window that you used, and the day and time when it resets.

![The usage panel for the Claude Pro plan. Session (5hr) is at 15% and resets at 1:09 PM. Weekly (7 day) is at 51% and resets on Sunday, Nov 8 at 6:59 PM.](https://becomeainative.io/lessons/lesson-2/img/lesson-2/usage-panel.png)

#### Models

Anthropic makes four Claude models (as of October 2026). A larger model gives better results on difficult work. But it is slower and uses more of your limits.

| Model | Good for | Cost | Messages in 5 hours on the $20 plan (approximately) |
|---|---|---|---|
| Fable | The most difficult work, for example a long task that continues for many hours without a person | Highest | Not in the Claude subscription plans |
| Opus | Difficult reasoning, plans, analysis, documents from many sources that do not agree, deep research | High | 20-40 |
| Sonnet | Most drafts, summaries and edits, routine changes in documents | Medium | 40-80 |
| Haiku | Simple and fast work in large quantities, for example sort many short items or change the format of a list | Lowest | 200 or more |

The numbers in the last column are our estimates for Claude Code with the `medium` effort. Anthropic does not give a number of messages for each model. Long messages, large files and higher effort decrease the number.

The name of the current model shows at the bottom of the prompt box. To change the model, do these steps:

1. Type `/model` in the prompt box.
2. Select **Switch model...** in the list of commands.

![The prompt box with the text "/model". Above it, the list shows the Model section with "Switch model...", and Opus 5.5 is the current model.](https://becomeainative.io/lessons/lesson-2/img/lesson-2/model-command.png)

3. Select a model in the list. A check mark shows the current model.

![The "Select a model" list with Default (recommended), Opus 5.5 with a check mark, Sonnet 5.5, Fable 5.1, Haiku 5.5 and older models. The Effort slider is below the list.](https://becomeainative.io/lessons/lesson-2/img/lesson-2/model-list.png)

In this lesson, keep the default model.

#### Effort

Effort sets how much the model thinks before it answers. There are five levels: `low`, `medium`, `high`, `xhigh` and `max`. The default level is `medium`. The current level shows next to the model name at the bottom of the prompt box, for example "Opus 5.5 Medium".

- Higher effort gives better answers for difficult work, for example a plan, an analysis or a problem with conflicting sources. But the answer comes more slowly and uses more of your plan limits.
- Lower effort is faster and uses less of your plan limits. It is sufficient for routine work, for example a change of format or a short summary.

To change the effort, type `/model` in the prompt box. Then move the **Effort** slider below the list of models. The screenshots in [Models](#models) show this slider.

#### Our recommendation for daily work

On the $20 plan, use the model and the effort for your task:

- For usual daily work, use the latest Opus model with the `medium` effort.
- After each 10 to 20 messages, type `/usage`. Make sure that the remaining limit is sufficient for your work.
- If you are close to the limit, change to Sonnet with the `medium` effort. Alternatively, purchase the Max plan, for approximately $100 for each month. But for manager work, the $20 plan is usually more than enough.
- Use Opus with the `xhigh` effort only for deep research. With this effort, you use all of your limits fast. A subsequent lesson tells you how to do research that continues for many days on the $20 plan.
- We do not recommend Fable and Haiku. In the daily work of a manager, there are almost no use cases for these models. The subscription plans do not include Fable. Haiku is sufficient only for simple work in large quantities.

Use fewer tokens with these habits:

- Do one task in each conversation.
- Name the three to five files that the task needs, not a full folder.
- When a conversation becomes long, start a new conversation from a handoff. [Part 9](#part-9-new-chat-and-history) tells you how.

### Part 9: New chat and history

A conversation is also called a session. Claude Code saves each session in your project, so that you can stop and come back later.

**Start a new conversation** with the new conversation button (a speech bubble with **+**) at the top of the panel, or with `/clear`. A new conversation starts with empty context. The AI agent does not remember the old conversation. It only reads your instruction files again.

Use one conversation for one task. Start a new conversation in these conditions:

- You change to a different task.
- The context indicator in the prompt box is more than half full.
- The AI agent makes the mistakes again that you corrected.
- It is the end of the day.

A long conversation is not memory. It is noise with some memory in it.

![The top of the Claude Code panel. Two red arrows point to the session history button (a clock) and the new conversation button (a speech bubble with +) at the right of the session name.](https://becomeainative.io/lessons/lesson-2/img/lesson-2/new-chat-and-history-buttons.png)

**Find an old conversation** in the session history. To open it, click the clock button at the top of the panel. You can search it by a word. When you open an old conversation, the AI agent continues with all of its context. Give each important session a name, for example `l02-index`. Then you can find it in the list. Claude Code keeps sessions on your computer for 30 days by default.

**Save the progress of a long task in a file.** A long task frequently needs more than one conversation. The best practice is to save the intermediate results in a Markdown file. We call this file a handoff. Later, the AI agent reads the file and continues from that point.

Save a handoff in these conditions:

- You stop a task before it is complete, for example at the end of the day.
- The conversation becomes long, and you want to continue with empty context.

To save and use a handoff, do these steps:

1. Tell the AI agent: `Save the progress of this task in drafts/handoff-host-calendar-sync.md, so that a new conversation can continue from it.`
2. Read the file. If a colleague can continue the work from this file, the handoff is good.
3. Start a new conversation with the file: `@drafts/handoff-host-calendar-sync.md Continue with the next step.`

A colleague can also continue your work from the same file. The practice and test task gives a more detailed instruction for a handoff.

### Part 10: Context management: context is the king

![Seven sources enter the context window: system instructions, instruction files and memory, your prompt, files and images, skills and MCP tools, tool results, and the current conversation.](https://becomeainative.io/lessons/lesson-2/img/lesson-2/context-window-overview.png)

This is the most valuable part of the lesson.

**What context is.** Context is all of the text that the model reads before it answers. It contains your prompt, your instruction files, the files that the AI agent reads, the conversation and the results of the tools. The model has no memory between conversations. It does not know your company, your product or your decisions, unless this information is in the context.

**Why context matters.** Give the same task to two new colleagues. One colleague gets the brief, the correct files and the decisions. This colleague does good work. The other colleague gets only one sentence and guesses. The AI agent works the same way. A better model cannot repair bad context. But with good context, the default model is sufficient for most of your work. Thus, when a result is bad, first examine the context, and then the prompt.

The model knows only its context ([Part 2](#part-2-the-four-parts-of-an-ai-agent)). Thus, most bad results come from bad context, not from a bad model. Bad context gives three types of failure:

- Missing context makes the AI agent guess, for example an invented target.
- Old context makes it wrong with confidence, for example the old PRD.
- Irrelevant context makes it slow and unclear, for example thirty files "for context".

![Missing context causes guesses. Old context causes wrong answers. Irrelevant context adds noise.](https://becomeainative.io/lessons/lesson-2/img/lesson-2/bad-context.png)

#### The context window

The context window is the maximum quantity of context that the model can read at one time. It is measured in tokens ([Part 8](#part-8-models-tokens-and-cost)). Different models have context windows of different sizes. Older models can read approximately 200,000 tokens. The current Claude models can read up to 1 million tokens. That is approximately ten books of the size of "Harry Potter and the Philosopher's Stone".

When the window becomes full, Claude Code makes a summary of the old conversation automatically. The summary keeps the important facts, and only some details go out. Then the work continues.

Thus, in usual work, you do not have to watch the size of the context window. The daily tasks of a manager seldom fill it. The window becomes important only for very large work, for example many long documents in one conversation. The quality of the context is more important than its size. The subsections below tell you why.

##### The `/context` command

To see how full the context window is, type `/context` in the prompt box. Claude Code opens the Context usage panel:

![The Context usage panel for claude-opus-5-5: 194.7k / 1.0M tokens (19%), a colored bar, and the table of categories. Messages uses 155.3k tokens, and the free space is 772.3k tokens.](https://becomeainative.io/lessons/lesson-2/img/lesson-2/context-usage.png)

The two lines at the top show the model and the context window:

- The model: the current model, for example `claude-opus-5-5`.
- The tokens: the tokens in the context, the size of the window and the percentage, for example `194.7k / 1.0M tokens (19%)`. This is the most important line.

#### Where the AI agent gets the context

The context comes from seven sources. You control some sources directly. The AI agent adds the other sources during its work.

##### System instructions of Claude Code

Anthropic writes these instructions. They tell the model how to work as an AI agent: how to use the tools, when to ask for permission and how to write answers. They also contain the descriptions of all tools, and facts about your computer, for example the date and the path of the project folder. Claude Code loads them at the start of each conversation. You cannot change them. But they use part of the context window before you type your first message.

##### Your instruction files and memory

The AI agent gets instructions from the files below. Some files load at the start of each conversation. Other files load only when a task needs them.

###### User `CLAUDE.md`

The user `CLAUDE.md` is in your user folder: `~/.claude/CLAUDE.md`. Claude Code loads it in each project on your computer. It is for rules about you, for example your role and your style of writing. Your team does not get it.

We do not recommend this file. It is outside the project, so you do not see it in your work, and it is easy to forget what is in it. Put your rules in the project `CLAUDE.md`.

###### `MEMORY.md` (auto memory)

Auto memory is a set of notes that the AI agent writes for itself, in `~/.claude/projects/<project>/memory/`. The AI agent saves a note when you correct it or tell it a preference, for example "Remember that I write dates as 7 Nov 2026." `MEMORY.md` is the index of the notes. Claude Code loads it in each conversation.

We do not recommend that you depend on auto memory. The notes are in your user folder, outside the project. Thus, you do not see them in your work, and you forget what is in them. The AI agent writes the notes itself, so a note can be wrong or old. But the AI agent follows it in each conversation, and you do not know why. Your team does not get these notes, so their AI agents work differently. Put each rule that you want to keep in the project `CLAUDE.md`.

###### Project `CLAUDE.md`

The project `CLAUDE.md` is in the root of the project folder. Claude Code loads it in each conversation of this project. Put here the rules of the project, for example the terms, the folders, the sources and the format of the output. When the project is in a shared repository, your team gets the same file.

The project `CLAUDE.md` can import other files with `@` and a path, for example `@docs/glossary.md`. Claude Code loads the imported file at the start of each conversation, as a part of `CLAUDE.md`.

The project `CLAUDE.md` can also refer to a file with a usual Markdown link, for example `[glossary](docs/glossary.md)`. Claude Code does not load this file at the start. The AI agent reads it only when a task needs it. Use a link for a long file or for a file that only some tasks need, for example a style guide or a product description.

A project can have more `CLAUDE.md` files in its subfolders, for example `sources/CLAUDE.md`. Claude Code loads this file only when the AI agent reads files in this subfolder. Put here the rules for this subfolder, for example "Never edit the files in this folder".

The AI agent reads `CLAUDE.md` and its imports on each step. Thus, keep them short, and import only a short file that each task needs. [Part 11](#part-11-how-to-write-claudemd) tells you how to write `CLAUDE.md`.

###### How the files work together

Claude Code loads the user and project `CLAUDE.md` files and `MEMORY.md` together. If two files do not agree, the AI agent can follow either of them ([Part 3](#part-3-layers-of-configuration)).

##### Your prompt

The prompt is the message that you type. It tells the AI agent the task. It is the part of the context that you control the most. A prompt can also contain pasted text. The AI agent does not know what you mean, only what you write. Thus, write the task, the sources, the output and how you will examine the result. A short and vague prompt makes the AI agent guess the missing parts. Each new prompt adds to the context, so a correction in a second message costs more than a clear first message. The practice and test task shows a vague request and a brief for the same task.

##### The files and images that you add

You can add files to the context in four ways. Add only the three to five files that the task needs. Add the newest version of a document, not all of its versions. Two versions that do not agree make the AI agent mix them. A file that you add goes into the context fully, so a long file uses a large part of the window. The four subsections below tell you how.

###### Type `@` and the file name

Type `@` in the prompt box, then type a part of the file name. Select the file from the list. The AI agent reads this file. You can also select a folder. But then the AI agent can read many files that the task does not need.

###### Drag a file into the prompt box with Shift

Push and hold the Shift key, and drag a file into the prompt box. Without the Shift key, VS Code opens the file in the editor. This works with files in the project and with files outside of it, for example a file on your desktop. It works with all types of files, for example images, screenshots and text documents. You can also paste an image into the prompt box. The AI agent reads the image as a part of the context.

###### The file that is open in the editor

In VS Code, the AI agent sees the file that is open in the editor as text, and the lines that you selected. A small indicator with the file name shows in the prompt box. Thus, open the file before you write the prompt. Then you can write the prompt without the file name. If the AI agent must not see this file, click the × next to the file name.

![The prompt box with the indicator of the open file user-story.md and the × button next to it](https://becomeainative.io/lessons/lesson-2/img/lesson-2/open-file-indicator.png)

###### The file name in your words

You can also write the name of the file in words, for example "read the meeting notes from Monday". But the AI agent can find an incorrect file, or read many files before it finds the correct one. Each incorrect file adds to the context. Thus, this way can quickly fill the context with information that the task does not need. It is better to type `@` or drag the file.

Best practice: give each file a clear name that tells what is in it. For example, write `2026-11-03-meeting-notes-loyalty-pilot.md`, not `notes2.md`. The AI agent examines the file names before it reads the files. With clear names, it finds the correct file and does not read the incorrect files.

##### Skills and MCP tools

Skills and MCP tools also go into the context. Each skill and each MCP server that you add uses part of the context window. Subsequent lessons tell you about skills and MCP tools.

##### The tool results

The AI agent also gets context itself, with its tools. It searches the folders, reads files, runs commands and finds pages on the web. Each result of a tool goes into the context, and it stays there until the end of the conversation. One large file or one long web page can fill a large part of the context window. Thus, a vague task can make the AI agent read many files that it does not need. To prevent this, tell the AI agent which folder or files to use. In subsequent lessons, the AI agent also gets context from Jira, Confluence and Slack with MCP tools.

##### The conversation

All of the messages of the current conversation stay in the context: your messages, the answers and the tool calls. Errors also stay there. If you corrected a wrong fact, the wrong fact is still in the context, and the AI agent can use it again. Thus, if the conversation has many wrong turns, start a new conversation with the correct facts. When the context window becomes full, Claude Code makes a summary of the old messages, and some details go out. A new conversation starts without the old messages. [Part 9](#part-9-new-chat-and-history) tells you when to start a new conversation.

#### See what is in the context

Type `/context` in the prompt box. The Context usage panel shows the tokens of each context source in the `Memory files` section.

### Part 11: How to write `CLAUDE.md`

`CLAUDE.md` gives the AI agent the rules of your project. [Part 10](#part-10-context-management-context-is-the-king) tells you where the file is. It also tells you when Claude Code reads the file. This part tells you what to write in it.

#### The six sections

For a manager, six sections are almost always sufficient. Write each section as a Markdown title:

- `## Who I am`: your role, product, company and stakeholders.
- `## What this project is`: the purpose of the project and a map of its folders.
- `## How I write`: accurate style rules with numbers.
- `## Data rules`: what can go into the output.
- `## Never do`: hard limits.
- `## Definitions`: the terms that the AI agent must not guess.

The [example](#an-example-of-claudemd) at the end of this part shows all six sections in one file.

#### Best practices

- Keep the file short. Put a long text, for example a style guide, in a different file. Then add a Markdown link to this file.
- Write accurate rules. A rule such as "be concise" changes nothing. The rule "Under 150 words, lead with the number" changes much.
- Write each rule as a command, for example "Never edit the files in `sources/`".
- Write each rule only one time. If two rules do not agree, the AI agent can follow the first rule or the second rule.
- If the output must have one format, give an example of this format.
- When you give the same correction two times, add it to `CLAUDE.md`.
- Do not put secrets, customer data or long procedures in `CLAUDE.md`.
- Read `CLAUDE.md` again after each change by the AI agent. Remove the rules that you do not use.

> **WARNING:** `CLAUDE.md` is guidance, not a lock. A rule such as "never read `.env` files" does not stop a read. Hard limits go in permission rules and hooks. Subsequent lessons teach them.

#### An example of `CLAUDE.md`

This is the `CLAUDE.md` of a manager, with the six sections:

```markdown
# CLAUDE.md

## Who I am

I am the manager for the partner dashboard of a travel marketplace.

## What this project is

- `sources/` holds the source documents. Never edit the files in this folder.
- `drafts/` holds my drafts and handoffs.
- `outputs/` holds the final documents.
- `journal/` holds my AI journal. Only append.

## How I write

- Slack drafts: under 200 characters. Lead with the decision.

## Data rules

- Never invent numbers. Every figure needs a source file, or the word "unverified".

## Never do

- Never delete files. Ask before you rename anything.

## Definitions

- "Partner" means a hotel or host, never a reseller.
```

#### Other Markdown files as instructions

Any Markdown file can tell the AI agent what to do. In Lesson 01, Claude Code followed `lesson-1/lesson-1-mcp-setup-guide.md` with you. Use three habits for each instruction file:

- Read it before you run it. An instruction file controls the AI agent as much as your prompt. Run only files from a source that you trust.
- Stay in control. Monitor the steps in the panel. If the AI agent does not do a step, tell it: "Stop. Go back to Step 3."
- Give the file again in a new conversation. The file stays when the conversation stops: `Continue lesson-1/lesson-1-mcp-setup-guide.md from Step 4.`

Markdown is good for instructions. Headings make "change section 6 only" accurate, and plain text makes a diff show exactly which words changed. When you get a Word document or slides, first ask the AI agent to change it to Markdown in `sources/`.

### Part 12: The AI agent shows each step in the chat

The AI agent shows all of its work in the chat. Read the chat as a log of what the AI agent did.

During one task, the AI agent can do many actions. It can also make many tool calls, one after the other. In this example, the prompt was "add one more test file and print project files structure". The AI agent used the Bash tool two times:

![The chat log of Claude Code for one prompt. Two "Thought for 1s" rows and two Bash tool calls, "List project files" and "Create test file and print structure", each with an IN block and an OUT block. Red arrows point to the descriptions of the two tool calls.](https://becomeainative.io/lessons/lesson-2/img/lesson-2/agent-steps-in-chat.png)

#### How to read the log

The log shows these items, from top to bottom:

- Your prompt is at the top.
- "Thought for 1s" shows that the model thought before the next step. Click it to see what the model thought.
- Each tool call is one row. The row starts with the name of the tool, for example **Bash**. Then it gives a short description of the action, for example "List project files". The red arrows in the screenshot show these descriptions.
- The answer of the AI agent comes after the last tool call.

For a manager, the descriptions of the tool calls are sufficient to understand the work. Each tool call also has the `IN` and `OUT` blocks: the commands and their results. If you are interested, you can read them. But this is the work of an engineer, not of a manager.

Use the log, not the memory of the AI agent. The AI agent can give an incorrect report of its own steps. The log shows what it did.

### Part 13: Questions from the AI agent

The AI agent stops and waits for you in two conditions. While it waits, the task does not continue. Thus, look at the panel when the AI agent is silent for a long time.

The AI agent also stops for a permission question. [Part 5](#part-5-safeguards) tells you how to answer it.

**A question about the task.** When your request is not clear, the AI agent can ask you to select an option, for example "Which of the two targets do you want to use?". Select an option, or write your own answer. A good question from the AI agent is better than a guess. Thus, add this line to each brief: "If something is missing or not clear, ask me before you guess."

**A plan to approve.** When you write `Show me your plan first, and wait for my approval.`, the AI agent shows the plan and waits for your answer ([Plan](#plan)).

You can also ask the AI agent questions at each time:

- "Why did you read this file?"
- "Which source gives this number? Quote the line."
- "Which files did you change in this conversation?"
- "What do you plan to do next?"

These questions are the quickest way to examine the work. The answers come from the context, so make sure that each important answer agrees with the files.

### Part 14: A new task before the previous task is done

You do not always wait until the AI agent is done. You have three options.

#### Correct the current task

Type your message and send it while the AI agent works. The message waits, and the AI agent reads it at its next step. Use this for small corrections, for example "Use the counted ticket figure, not the estimate." The AI agent continues with the correction.

#### Give the next task in the same conversation

You can give the AI agent a new task before it completes the current task. The new message waits, and the AI agent does the tasks one after the other.

Start the message with the sequence of the tasks, for example:

`After you complete the PRD draft, write a summary of it in five lines. After that, add the open questions to drafts/open-questions.md.`

![The AI agent works on the prompt "find all national holidays worldwide" and shows "Wrangling...". Below it, the prompt box has the next message "after done - put them in the file", which waits.](https://becomeainative.io/lessons/lesson-2/img/lesson-2/message-waits-while-agent-works.png)

If the next task needs the result of the current task, use this option.

#### Start a parallel task in a new conversation

Start a new conversation with the **+** button ([Part 9](#part-9-new-chat-and-history)), and type your request. The previous conversation continues its work in the background. Thus, you can work with the AI agent on many tasks at the same time.

For example, the AI agent writes a PRD draft from four sources. This takes two to four minutes. In a new conversation, you ask the AI agent for a status update from the meeting notes. When you read the status update, the PRD draft is also ready. You did two tasks in the time of one.

Do not let two conversations edit the same file. They can damage each other's work. Give each conversation its own files. The deeper dive at the end of the theory tells you more.

### Part 15: When something goes wrong, find the part

Each part of the AI agent has a different solution. Thus, first find the part that caused the problem.

| What you see | Most likely part | What to change |
|---|---|---|
| An incorrect or invented statement in a draft | The model, with weak context | Point at the correct source files. Add "cite a source path for every claim" to the brief or to `CLAUDE.md` |
| The AI agent ignored a rule that you gave yesterday | Context: the rule was only in an old conversation | Put permanent rules in `CLAUDE.md`. Start tasks from a handoff note |
| Auto mode stops and asks about an action | The harness: its classifier found a risky action | Read what it wants to do. Approve only if you expected it. A subsequent lesson shows how to write permission rules |
| An edit that you did not want | The model, with a vague brief | Ask the AI agent to undo the edit. Write a more specific brief. For a large change, ask the AI agent to show its plan first |
| "File not found" or an empty read | A tool, with an incorrect path | Use relative paths from the project root. Look in the Explorer |
| The AI agent cannot read a file outside your project | The working-directory limit of the harness | Permit the read one time, or copy the file into `sources/` |
| The same prompt gave a different answer today | The model is probabilistic | This is usual. A subsequent lesson teaches how to get reliable results |

### Deeper dive later in the intensive

This lesson is only the start. Claude Code can do much more, and subsequent lessons open these features one by one.

- Control Claude Code on your computer from your phone. Start a long task at your desk, and approve its next step from a coffee shop.
- The cache and the context window: why the second read of the same context can cost 10 times less, and how a model reads ten books in one input.
- A deep dive on a tool call: look inside each step of the AI agent, and see exactly what it read, what it ran and what it got back.
- Rewind, a time machine for your work: go back to an earlier state of the files or of the conversation. Also learn which changes no rewind can undo.
- Run many tasks at the same time. One AI agent writes a PRD, a second does research, a third makes a report, and you manage all of them.
- Schedule tasks, and let a task run again and again. Your weekly report is ready before you come to the office.
- Full control of changes and diffs, with Git: each version of each file, and an undo button for all of your work.
- Links between files and instructions: give the AI agent a map of your knowledge, so that it finds the correct file without your help.
- Skills and your own commands: teach the AI agent a task one time, and then start it with one command.

## Glossary

This table gives the new terms of this lesson. If a word in the lesson is not clear, read this table again.

| Term | Meaning |
|---|---|
| Harness | The program that runs the AI agent work cycle around the model. It collects the context, examines permissions, runs tools, gives back results and saves sessions. In this intensive, the harness is Claude Code. |
| Tool call | One action that the model proposes and the harness runs, for example to read or edit a file. |
| Context | The information that the AI agent uses for a task: instructions, files, notes and the conversation. You decide what goes into it. |
| Context window | All that the model can see at one time: instructions, files that it read and the conversation. |
| Token | A small part of a word that a model reads and writes. In English, one token is approximately four characters. You pay for tokens. |
| `CLAUDE.md` | A Markdown file of instructions that Claude Code loads at the start of each session. |
| Plan mode | A mode in which the AI agent does research and proposes a plan. It cannot edit until you approve. We do not recommend it ([Part 7](#part-7-permission-modes)). |
| Auto mode | A mode in which a classifier model examines actions for you. It decreases the number of questions, but it does not guarantee safety. |

### Popular commands

A command starts with `/`. Type `/` in the prompt box to see the list of commands, then continue to type to filter the list. A command works only at the start of a message. The text after the command is its input.

These are the commands that you use in this intensive:

| Command | What it does | When you use it |
|---|---|---|
| `/model` | Shows the list of models and the **Effort** slider | A task needs a stronger or a cheaper model ([Part 8](#part-8-models-tokens-and-cost)) |
| `/context` | Shows what fills the context window | Answers become vague or slow |
| `/usage` | Shows your use and the limits of your plan | You want to know your budget |
| `/mcp` | Shows your MCP servers, their status and their tools | An MCP tool does not work |
| `/status` | Shows the version, the model and the account | A support question |

Two more characters are important in the prompt box:

- `@` points at a file. [Part 10](#part-10-context-management-context-is-the-king) explains it.
- **Shift+Enter** starts a new line. **Enter** sends the message.

Do not learn all commands now. Learn the commands of this table, one at a time, when a task needs them. In a subsequent lesson, you make your own commands.

## Test task

1. Send this text to Claude Code:

    ```text
    Create the folder lesson-2/ in the root of this project. Download this file into it, and do not change it or its name:
    https://becomeainative.io/lessons/lesson-2/downloads/lesson-2-practice-and-test-task.md
    ```

2. Open `lesson-2/lesson-2-practice-and-test-task.md`, and do its steps in sequence.
