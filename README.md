# A simple HTML5 Site for Recipes

## Random Side Notes on TOP:

**The Odin Project on writing good commit messages:** <br>
https://www.theodinproject.com/lessons/foundations-commit-messages <br>
https://www.conventionalcommits.org/en/v1.0.0/ - for commit conventions <br>
https://www.ietf.org/rfc/rfc2119.txt - the RFC2119, for spec conventions<br>
Note to self: <br>
Good commit messages are very important. <br>
IN ```git -m```, use an active voice: “**Fix** card generator” 

Common commit message format:
 ![Screenshot (439)](https://github.com/Echimara/TOP/assets/123244902/5e978c72-72ce-4e78-9fab-f2ae7d5db8bc)

Original content: https://www.youtube.com/watch?v=OJqUWvmf4gg&t=8 

**To post a html site from github via github pages:** <br>

<ol>
<li>Make sure that the main HTML file of your project is called index.html. If it is not, you will need to rename it.</li>
 <li>Go to your GitHub repo on the web and click the Settings button </li>
 <li>Click on Pages on the left side bar.</li>
 <li>Change the Branch from none to main branch and click Save.</li>
</ol>

It may take a few minutes (The GitHub website says up to 10, but we’ve seen it take up to an hour. Do not add a “theme” to your project, or you may have git conflicts, instead, be patient.) but your project should be accessible over the web from your-github-username.github.io/your-github-repo-name (obviously substituting your own details in the link). <br>
If your project does not publish after 1 hour, ensure that you have a file called index.html in the root of your repository and all the settings have been set correctly. Go to your repo on GitHub and click on Actions, if there are no entries, then go back to the settings, change the Branch from main branch to none and click Save, then change the Branch from none to main branch and click Save.
