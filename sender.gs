/**
 * Creates a Google Doc and sends an email to the current user with a link to the doc.
 */
function createAndSendDocument() {
  try {
    const spreadsheetId = "1DxMkKVc7TO-hFsIkE-l5A9XMmK2JlOzIVRi1w6fdjjc"
    const range = "A1:B200"
    const results = Sheets.Spreadsheets.Values.get(spreadsheetId, range);
    const values = results.values
    let recipient = "starting_value"//"pmj2127@columbia.edu"
    for (var i = 0; i < values.length; i++) {
      if (values[i][1] == "FALSE") {
        recipient = values[i][0];
        console.log('set recipient to:', recipient);
        let vals = [
            [
              "TRUE"
            ]
            // Additional rows ...
          ];

        let valueRange = Sheets.newValueRange();
        valueRange.values = vals;

        const result = Sheets.Spreadsheets.Values.update(valueRange,
          spreadsheetId, 'b'+(i+1), {valueInputOption: "RAW"});
        break;
      }
      console.log("Passing over:", values[i][0]);
      
    }

    // get next value that has not been sent
    // send email
    // set that value as sent


    if (recipient == "starting_value") {
      console.log("No more emails to send")
      return;
    }
    console.log("Recipient", recipient)
    //// Get the email address of the active user - that's you.
    const email = Session.getActiveUser().getEmail();
//
    //// Get the name of the document to use as an email subject line.
    const subject = "It's Your Turn for the Massage Chair!"
//
    //// Append a new string to the "url" variable to use as an email body.
    const body = 'Come to the massage chair area to get your turn!\nYou get up to 5 minutes in the chair.\nEnjoy.';
//
    //// Send yourself an email with a link to the document.
    GmailApp.sendEmail(recipient, subject, body);
    console.log("Email sent!");
  } catch (err) {
    // TODO (developer) - Handle exception
    console.log('Failed with error %s', err);
  }
}