---
layout: post
title: "Configuring Octopress on GitHub Pages Using Windows 8"
date: 2013-07-07 21:49
comments: true
categories: programming, github, octopress, windows, web
---
I recently finished getting this Octopress blog running on GitHub Pages, and I couldn't be happier with the result. It took a bit of work to get up and running, however, so I figured that I should document some of the hoops I had to jump through on Windows to get this blog deployed. The [default installation instructions for Octopress](http://octopress.org/docs/setup/) were generally okay, but a couple of unexpected errors arose that left me hanging.
<!-- more -->
Of course, you need to [install Git](http://git-scm.com/) in order to start working with GitHub Pages. However, Octopress did not cooperate with my Git installation until I added <em>Git.exe</em> to my system's PATH. To do that, right-click on <em>My Computer</em>, select <em>Properties</em>, and then <em>Advanced system settings</em>. From the <em>Advanced</em> tab that you are currently on, click the <em>Environment Variables</em> button at the bottom. Edit <em>Path</em> and add the directory with your newly installed Git executable, separated from the last entry with a semicolon. For example, <code>...;C:\Program Files (x86)\Git\bin</code>

You will also need to install Ruby 1.9.3 as well as the Ruby DevKit that Octopress depends on. The original Octopress guide does not provide Windows installation instructions for Ruby, but you can find some convenient Windows installers [here](http://rubyinstaller.org/downloads/). The Ruby installer is automatic, but the DevKit needs to be manually extracted into a permanent installation folder of your choice (I used <code>C:\\DevKit</code>). After installing Ruby and extracting the DevKit, open up Windows PowerShell and do the following to install:

{% codeblock lang:bash %}
cd C:/DevKit
ruby dk.rb init
ruby dk.rb install
{% endcodeblock %}

After getting those software packages installed, you should be able to follow the rest of Octopress' installation instructions without any problems. I will paraphrase the steps below.

{% codeblock lang:bash %}
cd [path to your GitHub directory]/GitHub/
git clone git://github.com/imathis/octopress.git octopress
cd octopress
ruby --version # Assert that Ruby 1.9.3 is installed and working

gem install bundler
bundle install

rake install # Installs default theme
{% endcodeblock %}

Now that Octopress is installed, it's time to [deploy your site to GitHub](http://octopress.org/docs/deploying/github/). Note that all of your blog administration will be run from the <code>/GitHub/octopress</code> directory, and not from your site's directory that will be generated in the next step.

Assuming you have already [signed up with GitHub](https://github.com/), create a repository <code>username.github.io</code> where <code>username</code> is your GitHub username. Note that the Octopress deployment instructions call for you to use a <code>.com</code> user domain; due to recent changes to GitHub Pages, however, <code>.io</code> domains are now used for all pages.

Next, still from your <code>octopress</code> directory, run the command:

{% codeblock lang:bash %}
rake setup_github_pages
{% endcodeblock %}

This gets Octopress ready to publish your site to GitHub Pages. It sets your <em>master</em> branch to <code>_deploy</code>, which is the content that will be published on your <code>username.github.io</code> site. The <code>source</code> directory of your Octopress site is set to the <em>source</em> active branch. To finish deploying your site, run the following:

{% codeblock lang:bash %}
rake generate
rake deploy
{% endcodeblock %}

Your site has now been generated and published to your <code>username.github.io</code> domain. It took ten minutes for mine to appear initially. Be sure to commit the source branch of your Octopress site to GitHub whenever you make changes.

{% codeblock lang:bash %}
git add .
git commit -m 'commit message'
git push origin source
{% endcodeblock %}

Now you're ready to get [blogging with Octopress](http://octopress.org/docs/blogging/). All you have to do after updating your site is run the <code>rake generate</code> and <code>rake deploy</code> commands and commit your source branch again to backup your Octopress files.

Happy blogging!