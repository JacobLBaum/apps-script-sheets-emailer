This is a Google Apps Script script to send emails as described in an input Google Sheet.

## Apps Script
This is a script meant to be run on [Google Apps Script](https://script.google.com/home)

The `message_sign_ups.csv` is an example of how the Google sheets should be formatted.

## How to run this script
- create a new project and paste the sender.gs code into the Code.gs file created for you replacing the whole file with the contents of sender.gs
- add the Google Sheets API service
- create a spreadsheet formatted the same as `message_sign_ups.csv`
    - to begin all users who have not received an email should have the value in column B set to `FALSE`
- retrieve the spreadsheet_id from the created spreadsheet url
    - the url is formatted as follows:
        - https://docs.google.com/spreadsheets/d/{spreadsheet_id}/edit....
- paste the spreadsheet_id into the variable on line 6 entitled `spreadsheetId` replacing the existing value
- click `Run` and give the requisite permissions
    - if the website is not trusted, click -> Advanced Options -> Go to {name_of_project}
    - now you will have given Apps Script permission to send emails from your email
- click `Run` again and the sender will go down the list and send an email to the first recipient who has the value `FALSE` in column B
    - it will then set the value for that recipient to `TRUE` indicating that they have been sent their message
    - the current execution will terminate, setting the state for the next recipient in the spreadsheet ready for the next run
- continue running the application, once per recipience email to be sent until all recipients have received and email and the message `No more emails to send` is printed to the console
