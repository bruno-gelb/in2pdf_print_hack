### purpose

currently LinkedIn has issues with it's feature *export CV to PDF*,
the biggest of which is that you will lose all line breaks!

source: https://community.linkedin.com/questions/284250/the-save-to-pdf-function-now-removes-all-the-line.html

this hack is simply inspired by [Paul Miller](https://www.linkedin.com/in/paulantoinemiller)'s post in that thread (thank you! hope you don't mind)
small js-script which you could run in browser console
to achieve better page layout before PDF printing.

### how to use
1. go to your profile public link. (Should be logged in.)
2. open browser console, copy-paste the script, hit Enter.
3. click all the buttons (if necessary) to expand everything
that should be expanded
4. hit your browser printing keybind to *Save as PDF*
5. check if layout looks good at preview, disable *Headers and footers* option, etc.
(if necessary - tweak script code to achieve better results)

**note:** the script was hacked rough-and-ready and currently is NOT in customizable condition (maybe will improve the code later. Or you could just fork it by yourself!)
