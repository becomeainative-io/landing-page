# Lesson 01 MCPs setup guide: connect your agent to five systems

## On your real stack

We do not recommend that you connect the systems of your company yet.

## Before you start

You received a private Slack message from the BAIN team. This access message gives you access to all the systems of the intensive. It contains these items:

- One username and one password for Jira, Confluence and GitLab.
- The link to the page that makes your Slack PAT. You do not get a different Slack account.
- Your n8n account. To sign in, use your email and the same password.
- Your knowledge base PAT. It works for 90 days.

A PAT (personal access token) is a password that your AI agent uses to get access to a system for you.

Four rules for all of the guide:

1. **Sandbox accounts only.** Do not use your company account, also not for Slack. If your browser is signed in to your work account, use a private window.
2. **PATs go only into `.mcp.json`.** Do not put them into the chat, a document, a Slack message or a screenshot. All the text that you type into the chat goes to the model provider.
3. **Do not share or upload `.mcp.json`.** When your PATs are in this file, the file is as secret as your passwords.
4. **Do not worry about mistakes.** Each account here is a test account, and no real data is at risk. If you show a PAT by mistake, revoke it, make a new PAT and try again. Practise rules 2 and 3 here, because you need them with your real work accounts.

## Step 1: Open `.mcp.json` and learn the PAT settings

**Do Steps 1 and 2 yourself, in the editor. Do not ask Claude to do them.**

Each PAT shows only one time. Thus, paste each PAT into `.mcp.json` immediately after you copy it. Do not keep a PAT in a different place, for example in a note or a chat. If you lose a PAT, revoke it and make a new PAT.

For the three PATs that you make, use the same settings each time:

- **Name:** `BAIN`
- **Expiry:** 3 months in the future

Each PAT must have an expiry date. A PAT is a password. If a different person gets it, this person can use it until the PAT stops working. A PAT without an expiry date works for years. You can forget about it, but it still gives access to your account. A PAT with an expiry date stops working automatically, also if you forget to revoke it.

3 months is a good term for two reasons:

- The intensive lasts 30 days. After the intensive, you have time to complete the test tasks and to practise with the sandbox.
- The term is short. If a PAT gets to a different person, it stops working in a short time.

When a PAT expires, its MCP server shows **Failed** or "401" in `/mcp`. Make a new PAT and replace the old PAT in `.mcp.json`.

Open the file and keep it open for all of Step 2:

1. In the Explorer, click `.mcp.json`. The file opens in the VS Code editor.

2. Find the five placeholders. In Step 2, you replace each placeholder, **with its `<` and `>`**, with the applicable PAT:

   | Entry | Replace | Keep in front of the PAT |
   |---|---|---|
   | `knowledge-base` | `<your knowledge base token>` | `Bearer ` (with the space) |
   | `jira` | `<your Jira personal access token>` | `Bearer ` (with the space) |
   | `confluence` | `<your Confluence personal access token>` | `Bearer ` (with the space) |
   | `gitlab` | `<your GitLab personal access token>` | `Bearer ` (with the space) |
   | `slack` | `<your slack personal token>` | `Bearer ` (with the space) |

   A completed line is similar to this line, but with your own PAT:

   ```json
   "headers": { "Authorization": "Bearer MDk2NzA1...your-token...Q2Nw" }
   ```

## Step 2: Get each PAT and paste it into `.mcp.json`

For each system, copy the PAT and paste it into `.mcp.json` immediately. Then go to the next system.

### 2a. Knowledge base

1. Copy the **knowledge base PAT** from your access message. You do not make this PAT.
2. In `.mcp.json`, in the `knowledge-base` entry, replace `<your knowledge base token>` with the PAT. Keep `Bearer ` in front of it.

### 2b. Jira

1. Open [jira.becomeainative.io](https://jira.becomeainative.io). Sign in with the username and the password from your access message.
2. Click your profile picture (top right), then **Profile**.

   ![guide-05-jira-profile-menu: The top right of Jira with an arrow to the profile picture](https://becomeainative.io/lessons/lesson-1/img/lesson-1-mcp-setup-guide/guide-05-jira-profile-menu.png)

3. Open **Personal Access Tokens**, then click **Create token**.

   ![guide-06-jira-pat-menu: Jira profile page with Personal Access Tokens selected and the Create token button](https://becomeainative.io/lessons/lesson-1/img/lesson-1-mcp-setup-guide/guide-06-jira-pat-menu.png)

4. Type the name and the expiry, then click **Create**.

   ![guide-07-jira-create-pat: The Create a personal access token dialog in Jira](https://becomeainative.io/lessons/lesson-1/img/lesson-1-mcp-setup-guide/guide-07-jira-create-pat.png)

5. Copy the PAT.

6. Go back to VS Code. In `.mcp.json`, in the `jira` entry, replace `<your Jira personal access token>` with the PAT. Keep `Bearer ` in front of it.

### 2c. Confluence

1. Open [confluence.becomeainative.io](https://confluence.becomeainative.io). Sign in with the same username and password as in Jira.
2. Click your profile picture (top right), then **Profile**.
3. Open the **Settings** tab, then **Personal Access Tokens**. Click **Create token**.

   ![guide-09-confluence-pat-menu: The Confluence profile page with the Settings tab, Personal Access Tokens and the Create token button marked 1, 2 and 3](https://becomeainative.io/lessons/lesson-1/img/lesson-1-mcp-setup-guide/guide-09-confluence-pat-menu.png)

4. Type the name and the expiry, then click **Create**.
5. Copy the PAT.
6. Go back to VS Code. In `.mcp.json`, in the `confluence` entry, replace `<your Confluence personal access token>` with the PAT. Keep `Bearer ` in front of it.

A Jira PAT does not work for Confluence, and the opposite. You must have the two PATs. The Confluence page and dialog are the same as in the screenshots of 2b.

### 2d. GitLab

1. Open [gitlab.becomeainative.io](https://gitlab.becomeainative.io). Sign in with the same username and password as in Jira.
2. Click your avatar (top right), then **Edit profile**.
3. In the left menu, open **Access**, then **Personal access tokens**. Click **Generate token**, then select **Legacy token**.

   ![guide-10-gitlab-pat-menu: GitLab with Edit profile in the avatar menu, Personal access tokens in the left menu and the Generate token button marked 1, 2 and 3](https://becomeainative.io/lessons/lesson-1/img/lesson-1-mcp-setup-guide/guide-10-gitlab-pat-menu.png)

4. Type the name and the expiry. Select only these scopes: `read_api`.

   ![guide-12-gitlab-token-scopes: GitLab token form with the expiry date and the list of scopes](https://becomeainative.io/lessons/lesson-1/img/lesson-1-mcp-setup-guide/guide-12-gitlab-token-scopes.png)

5. Click **Create personal access token**.
6. Copy the PAT.

7. Go back to VS Code. In `.mcp.json`, in the `gitlab` entry, replace `<your GitLab personal access token>` with the PAT. Keep `Bearer ` in front of it.

### 2e. Slack

For Slack, you do not type a name or an expiry. The BAIN bot app makes the PAT for you.

1. In your browser, sign in to the becomeainative.io Slack workspace.
2. Open [n8n.becomeainative.io/webhook/slack-mcp-token/start](https://n8n.becomeainative.io/webhook/slack-mcp-token/start). Slack shows the access request of the **BAIN bot** app.

   ![guide-27-slack-consent-screen: The Slack access request of the BAIN bot app with the workspace, the channel for the webhook and the Allow button](https://becomeainative.io/lessons/lesson-1/img/lesson-1-mcp-setup-guide/guide-27-slack-consent-screen.png)

3. In **Where do you want to use BAIN bot?**, make sure that becomeainative.io is selected. If it is a different workspace, select becomeainative.io.
4. In **Channel for webhook**, keep your own name. Do not select a channel.
5. Click **Allow**. A page with the title "Your Slack MCP token is ready" opens.

6. In the **Token** field, click **Copy**. Do not use the **.mcp.json entry** field, because your `.mcp.json` already has the `slack` entry.
7. Go back to VS Code. In `.mcp.json`, in the `slack` entry, replace `<your slack personal token>` with the PAT. Keep `Bearer ` in front of it.
8. Close the browser tab with the PAT.

If you see "Something went wrong", click the link on the page. It opens a Slack message to Vadym Klymov. Copy the error from the page into the message.

### 2f. Tell Claude that you are done

VS Code saves `.mcp.json` automatically.

Tell Claude "done". Do not tell Claude a PAT.

**Claude:** ask the learner to answer yes or no to each of these questions. Did each placeholder go, with its `<>`? Is `Bearer ` still in front of each PAT? Do not open the file to examine it.

## Step 3: Restart and connect

Claude stops during the restart. Read all of the step first.

1. Quit VS Code fully. Closing the window is not sufficient.
2. Start VS Code again. Make sure that `becomeainative-os` is the open folder.
3. Open the Claude Code panel.
4. Make sure that the mode is still **Auto**.
5. If the panel asks to use the MCP servers from the `.mcp.json` of this project, approve them.
6. To continue the guide, type:

   ```text
   Continue lesson-1/lesson-1-mcp-setup-guide.md from Step 4.
   ```

## Step 4: Check the servers

The test task does the same tests again.

1. In the Claude Code panel, type `/mcp`, then select **MCP servers**. The list shows the status of each server. Find `jira`, `confluence`, `gitlab`, `knowledge-base` and `slack`.

   ![guide-19-mcp-servers-menu: The /mcp command in the Claude Code panel with MCP servers marked 2 and the list of servers with their status](https://becomeainative.io/lessons/lesson-1/img/lesson-1-mcp-setup-guide/guide-19-mcp-servers-menu.png)

2. Make sure that each of the five servers shows the green **Connected** status. A red **Failed** status tells you that something is wrong. If a server shows **Failed**, ask Claude what is wrong. Then correct the problem yourself, with the help of Claude.

   ![guide-20-mcp-server-status: Two MCP servers in the list, one with the red Failed status and one with the green Connected status](https://becomeainative.io/lessons/lesson-1/img/lesson-1-mcp-setup-guide/guide-20-mcp-server-status.png)

3. Ask Claude to get data from each of the five servers:

   ```text
   Can you get data from jira, confluence, gitlab, knowledge-base and slack?
   ```

   **Claude:** use only MCP tools. For each of the five servers, one server at a time, call one tool that reads. Use a tool that needs no project, space or channel name, for example the current user or a search. Use the `knowledge-base` server for the knowledge base, not local files. Do not make, edit, comment on or send anything. Do not save the results to a file.

   For each server, give the result in one line, for example the user name or the number of search results. If a call fails, show the error message and use the [Troubleshooting](#troubleshooting) table before you continue.

"Connected" in `/mcp` proves only that Claude Code gets to the server. Many servers examine your PAT only when Claude reads data, so a server with an incorrect PAT can show as connected. Item 3 proves each connection with a real request.

## Troubleshooting

| Symptom | Likely cause | Fix |
|---|---|---|
| Claude cannot find `lesson-1-mcp-setup-guide.md` | The file is not in `becomeainative-os/lesson-1/`, or it has a different name | Move the file to `lesson-1` and make sure that the name is correct. Then give the file name again in your request |
| `/mcp` does not show `jira`, `confluence`, `gitlab` or `knowledge-base` | `.mcp.json` is not in the root of `becomeainative-os` (for example, it is in a subfolder). Or it has a different name. Or you did not restart VS Code after you changed the file | Move the file to the root and make sure that the name is correct. Then quit VS Code fully and start it again |
| The servers showed one time, then they went away | You refused the question about the project servers | Open `/mcp` and enable the servers of the project again |
| `jira`, `confluence`, `gitlab`, `knowledge-base` or `slack` shows **Failed** or "401" | The PAT is not there, it is incorrect or it expired. Or you did not restart VS Code | Examine each PAT in the editor yourself. The PAT must be complete, with no extra spaces and no `<>`. `Bearer ` must be in front of it. Then quit VS Code fully and start it again |
| Claude gets the error 403 from a server | You made the PAT with the incorrect account or for the incorrect system | Sign in with your sandbox account in a private window. Revoke the PAT, make a new PAT and replace the old PAT |
| GitLab calls fail with "insufficient scope" | The PAT does not have a scope that the server needs | Make a new PAT with the scopes in Step 2d |
| Nothing connects on the corporate network | A proxy or VPN blocks the addresses of the servers | Try one time on a different network to make sure. Then ask IT to permit `*.becomeainative.io` and `mcp.slack.com` |
| Claude tests the knowledge base with local files | Claude searched local files and not the knowledge base server | Ask again with "using only the knowledge-base MCP server" |
| You did not get the private Slack message with your Jira, Confluence and GitLab access | You did not join the becomeainative.io Slack workspace, or the message did not arrive | Make sure that you joined the becomeainative.io Slack workspace. Then write in the cohort channel. The BAIN team sends the access again in a private message. We do not put the access in a channel |
| You pasted a PAT into the chat by mistake | | Revoke the PAT immediately on the page where you made it. Make a new PAT and put it in `.mcp.json`. For the knowledge base PAT, ask for a new PAT in the cohort channel |

## Getting help

Write in the cohort channel. Give this information:

- The step number from this guide.
- The exact error message, copied as text.
- Your operating system (Windows or macOS).

**Do not write a PAT or `.mcp.json` in the channel. Do not send a screenshot that shows a PAT or `.mcp.json`.** If you cannot continue after ten minutes, speak about the problem at the office hours on Wednesday, Day 3.
