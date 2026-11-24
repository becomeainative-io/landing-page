# Lesson 06 practice & test task

## Contents

- [Your scripts, step by step](#your-scripts-step-by-step)
  - [Step 1: Make sure that Python is installed](#step-1-make-sure-that-python-is-installed)
  - [Step 2: Make a skill that analyzes stock prices](#step-2-make-a-skill-that-analyzes-stock-prices)
  - [Step 3: Make a skill that analyzes the weather](#step-3-make-a-skill-that-analyzes-the-weather)
- [Test task](#test-task)
  - [Before you start the test task](#before-you-start-the-test-task)
  - [The case](#the-case)
  - [Step 1: Get the answers from your skills](#step-1-get-the-answers-from-your-skills)
  - [Step 2: Make the results file](#step-2-make-the-results-file)
  - [Step 3: Send your results for review](#step-3-send-your-results-for-review)

## Your scripts, step by step

### Step 1: Make sure that Python is installed

#### What it is

Each script of this lesson runs with Python 3.11 or newer. The AI agent finds out if your computer has it. If Python is missing or old, the AI agent installs the latest version. You do what the AI agent tells you.

#### Find out which Python you have

1. Send this text to Claude Code:

    ```text
    Is Python installed on this computer? Which version?
    ```

2. If the AI agent finds Python 3.11 or newer, go to Step 2.

#### Install or update Python

Do these steps only if Python is missing or older than 3.11:

1. Send this text to Claude Code:

    ```text
    Install the latest Python 3 on this computer. Before each command, tell me in one sentence what it does. If a step needs my password or my click, tell me exactly what to do. If one method does not work, try a different method.
    ```

2. Do all the steps that the AI agent tells you. For example, on Windows, click **Yes** in the window that asks for permission.
3. Restart your computer. Many problems after an installation go away after a restart. Then open VS Code and your project again.
4. Send the text of "Find out which Python you have" again. Make sure that the AI agent finds Python 3.11 or newer.

A new Python does not delete an old version. The old version can stay on your computer.

When you complete these steps, you see this result. The AI agent finds Python 3.11 or newer on your computer.

#### If Step 1 does not work

| Symptom | Fix |
|---|---|
| `python` or `python3` not found after the installation | Restart your computer. If the problem stays, tell the AI agent the error and do the steps that it gives |
| Windows: `python` opens the Microsoft Store | Windows has a shortcut with the same name. In Windows settings, open **Apps**, then **Advanced app settings**, then **App execution aliases**. Turn off the two Python aliases |
| The AI agent finds the old version after the installation | Restart your computer. If the problem stays, ask the AI agent to show the path of each Python that it finds |
| Your company laptop blocks the Python installer | Use a personal computer for the intensive, or the software portal of the company. Never go around a policy |

### Step 2: Make a skill that analyzes stock prices

#### What it is

You make the skill `stock-analysis`. It shows the three parts of a reliable skill:

1. The AI agent decides which data to get: which file, which companies and which period.
2. The Python script calculates the numbers.
3. The AI agent explains the numbers of the script.

The data is the file `lesson-6-stock-prices.csv`. It has the daily close prices of 20 companies from 2021 to 2025: 26,060 rows. We generated this data for training. The companies do not exist.

`https://becomeainative.io/lessons/lesson-6/downloads/lesson-6-stock-prices.csv`

#### Why a manager uses it

- A calculation on thousands of rows is exact, and it gives the same result each time.
- The same method works for each table of your work: sales, budgets, tickets, hours.

#### Make the skill

In this practice, you write each request to Claude Code yourself. This file tells you what the request must ask.

1. Write a request to Claude Code. In it, ask the AI agent to create the project skill `stock-analysis` with a `SKILL.md` and a Python script. Your request must give these items:
    - The script downloads the CSV file from a URL, and saves a copy in `lesson-6/data/`.
    - The script gets the tickers and the period as arguments.
    - The script calculates for each ticker: the first and the last close price, the average close price, the total return in %, the volatility (the standard deviation of the daily returns) in %, and the maximum drawdown in %.
    - The script writes the results to `lesson-6/results/stocks.json`.
    - The script uses only the standard library of Python.
    - The AI agent writes a comment in plain language above each logical block of the script. The comment tells what the block does. Write this sentence in your request: `Write a comment in plain language above each logical block of the script.`
    - The AI agent selects the tickers and the period from the request of the user.
    - The AI agent uses only the numbers of the script. It never calculates a number itself.
    - The AI agent explains the result in five sentences or fewer: which company grew most, which company had the most risk, and why.
    - The AI agent does not give investment advice: no "buy" and no "sell".
2. Before the AI agent writes the files, read its plan. If an item is missing, tell the AI agent to add it.
3. Restart VS Code fully. Type `/skills`, and make sure that `stock-analysis` is in the list.

#### Read the comments of the script

You do not need Python knowledge to read a script. Read the comments. A comment is a line that starts with `#`. VS Code shows the comments in a different color. If the comments do not tell you enough, ask the AI agent. It explains each part of the script in plain language.

1. In VS Code, open the Python script in `.claude/skills/stock-analysis/scripts/`.
2. Read only the comments, from the top to the bottom. Do not read the code yet.
3. With the comments, find these blocks:
    - The block that downloads the CSV file.
    - The block that selects the rows of the tickers and of the period.
    - The block that calculates the daily returns.
    - The block that calculates the maximum drawdown.
    - The block that writes `stocks.json`.
4. If a block has no comment, or the comment does not tell you enough, ask the AI agent to write a comment in plain language above this block.
5. If you do not understand a comment, select the comment and its block. Ask Claude Code to explain them in plain language. Then ask it to write the comment again, so that it is clear for you.
6. Select the lines of the block that calculates the maximum drawdown. Ask Claude Code to explain these lines one by one, in plain language.

When you complete these steps, you see this result. You found the five blocks with the comments. You can tell where the script calculates each number.

#### Try it: ask about the companies

1. In a new conversation, ask which of the companies in the file grew most in 2025, and which one had the most risk. Give the URL of the file. Do not name the skill.
2. Look at the panel. The skill loads. The AI agent selects the tickers and the period, and runs the script. Then it explains the result.
3. Ask the AI agent which parts of its answer about the companies it decided, which parts the script calculated, and which parts it explained.

When you complete these steps, you see this result. `.claude/skills/stock-analysis/` has `SKILL.md` and a Python script in `scripts/`. The skill loaded for your question, and the AI agent explained the numbers of the script.

#### If Step 2 does not work

| Symptom | Fix |
|---|---|
| The skill is not in `/skills` | Make sure that the path is `.claude/skills/stock-analysis/SKILL.md`. Restart VS Code fully |
| The download does not work on a company network | Download the file in the browser, and put it into `lesson-6/data/`. Ask the AI agent to change the script, so that it can also read a local file |
| `ModuleNotFoundError: No module named ...` | The script uses a library that is not in the standard library of Python. Ask the AI agent to write the script again with the standard library only |
| The script has no comments, or the comments are not clear | Ask the AI agent to write a comment in plain language above each logical block of the script |
| The AI agent calculates a number itself | Add this rule to the start of `SKILL.md`: "Run the script. Never calculate these numbers yourself." |
| The AI agent says "buy" or "sell" | Make the rule in `SKILL.md` more precise. Then send the request again |

### Step 3: Make a skill that analyzes the weather

#### What it is

You make the skill `weather-analysis` with the same three parts. The AI agent decides which cities, continents and months to analyze. The script calculates the statistics. The AI agent explains them.

The data is the file `lesson-6-weather.csv`. It has the daily weather of 30 cities on 6 continents from 2021 to 2025: 54,780 rows. Each row has the mean, the minimum and the maximum temperature, and the precipitation. We generated this data for training. It is near to the real climate, but it is not a real measurement.

`https://becomeainative.io/lessons/lesson-6/downloads/lesson-6-weather.csv`

#### Make the skill

1. Write a request to Claude Code. In it, ask the AI agent to create the project skill `weather-analysis` with a `SKILL.md` and a Python script. Your request must give these items:
    - The script downloads the CSV file from a URL, and saves a copy in `lesson-6/data/`.
    - The script gets the filters as arguments: the continents, the cities, the years and the months. Each filter is optional.
    - The script calculates for each city and for each continent: the mean, the median, the minimum and the maximum of `temp_mean_c`, the number of days with precipitation, and the total precipitation in mm.
    - The script writes the results to `lesson-6/results/weather.json`.
    - The script uses only the standard library of Python.
    - The AI agent writes a comment in plain language above each logical block of the script. The comment tells what the block does. Write this sentence in your request: `Write a comment in plain language above each logical block of the script.`
    - The AI agent selects the filters from the request of the user. For example, "summer" in the north is June to August, and in the south it is December to February.
    - The AI agent uses only the numbers of the script. It never calculates a number itself.
    - The AI agent explains the result in five sentences or fewer: where it was warmest, where it was coldest, and where the mean and the median are very different.
    - The skill is not for weather forecasts, because the file has only past data.
2. Before the AI agent writes the files, read its plan. If an item is missing, tell the AI agent to add it.
3. Restart VS Code fully. Type `/skills`, and make sure that `weather-analysis` is in the list.

#### Read the comments of the script

1. In VS Code, open the Python script in `.claude/skills/weather-analysis/scripts/`.
2. Read only the comments, from the top to the bottom. Do not read the code yet.
3. With the comments, find these blocks:
    - The block that applies the filters: the continents, the cities, the years and the months.
    - The block that calculates the median.
    - The block that counts the days with precipitation.
    - The block that calculates the results for each continent.
4. In the block that counts the days with precipitation, find the condition for one day. For example, `precipitation_mm > 0`. Ask the AI agent if a day with 0.1 mm counts as a day with precipitation.
5. If a block has no comment, or the comment does not tell you enough, ask the AI agent to write a comment in plain language above this block.
6. If you do not understand a comment, select the comment and its block. Ask Claude Code to explain them in plain language. Then ask it to write the comment again, so that it is clear for you.

When you complete these steps, you see this result. You found the four blocks with the comments. You know which days the script counts as days with precipitation.

#### Try it: trigger tests

1. In a new conversation, ask which continent had the warmest summer in 2024. Give the URL of the file. Do not name the skill.
2. Look at the panel. The skill loads. Look at the filters that the AI agent selected. Did it use different summer months for the north and for the south?
3. In a new conversation, ask about the weather in London tomorrow. The skill must not load, because the file has no forecasts.

When you complete these steps, you see this result. `.claude/skills/weather-analysis/` has `SKILL.md` and a Python script in `scripts/`. The skill loaded for the question about the summer, and it did not load for the forecast.

#### If Step 3 does not work

| Symptom | Fix |
|---|---|
| The skill is not in `/skills` | Make sure that the path is `.claude/skills/weather-analysis/SKILL.md`. Restart VS Code fully |
| The skill does not load for the question about the summer | Add the words that you used to the description of the skill, for example "temperature", "climate", "warmest" |
| The skill loads for the forecast | Make the "Not for" part of the description more precise |
| The script has no comments, or the comments are not clear | Ask the AI agent to write a comment in plain language above each logical block of the script |
| The AI agent calculates a number itself | Add this rule to the start of `SKILL.md`: "Run the script. Never calculate these numbers yourself." |
| The AI agent uses June to August for the south | Make the rule about the seasons in `SKILL.md` more precise |

## Test task

### Before you start the test task

- You completed Steps 1 to 3 of this file.
- `stock-analysis` and `weather-analysis` are in `.claude/skills/` of your project.
- VS Code is open with the Claude Code panel in **Auto** mode.

### The case

Your manager sends you this message: **"For the planning meeting, I need two short facts. Which of the 20 companies had the best balance of growth and risk from 2021 to 2025? On which continent did the median temperature of the summer increase most from 2021 to 2025?"**

### Step 1: Get the answers from your skills

1. In a new conversation, send the first question of your manager in your own words. Do not name the skill.
2. In a new conversation, send the second question in your own words. Do not name the skill.

### Step 2: Make the results file

1. In the `lesson-6` folder, make the file `lesson-6-test-results.md` with this text:

    ```markdown
    # Lesson 06 test results

    - Date:

    ## 1. Answers
    (the answer to each of the two questions of your manager, with the numbers of the scripts)

    ## 2. File structure
    (the files and folders of your two skills)
    ```

2. In section 1, write the two answers of your skills.
3. Ask Claude Code to write the file structure of `.claude/skills/stock-analysis/` and `.claude/skills/weather-analysis/` in section 2. The AI agent writes the names of the files and folders as a tree in a code block, not the text of the files. For example:

    ```text
    .claude/skills/
    ├── stock-analysis/
    │   ├── SKILL.md
    │   └── scripts/
    │       └── analyze_stocks.py
    └── weather-analysis/
        ├── SKILL.md
        └── scripts/
            └── analyze_weather.py
    ```

### Step 3: Send your results for review

1. Make sure that the file has no credentials and nothing from your company.
2. Ask Claude Code to make sure that the file has no secrets and no personal data, and then to send it to the Slack cohort channel. The message must mention `@channel`. Ask the AI agent for the link to the message.
3. Click the link. Make sure that the message is in the correct Slack channel. If it is not, tell Claude to correct it.

**Stuck?** Write the full error message in the cohort channel.
