const button = document.getElementById('button');


button.addEventListener('click', (e) => {

  // Get input text
  console.log('button clicked')

 
      // Make http call
      //var x = TestingWCFRestWithJsonp()
      $.soap({
        url: 'http://localhost:57280/BrokerService.svc/',
        method: 'GetAll',    //  method: 'GetById',
      
        //data: { Id: 1	},
      
        success: function (soapResponse) {
          var x = soapResponse.toString();
          console.log(x)
          // do stuff with soapResponse
          // if you want to have the response as JSON use soapResponse.toJSON();
          // or soapResponse.toString() to get XML string
          // or soapResponse.toXML() to get XML DOM
        },
        error: function (SOAPResponse) {
          // show error
          console.log(`Error in $.soap, Check it Mo: ${SOAPResponse}`)
        }
      });
      // .then( data => {
      //     if(data == null) {
      //         // Show alert
      //         ui.showAlert('data == null', 'alert alert-danger');
      //     } else {
      //         // Clear any alerts first: Mo: this is better than the 
      //         clearAlert();

      //         // Show data
      //         console.log(data.toString())
      //         // Show repos
      //         // console.log(data.repos)
      //         // ui.showRepos(data.repos)
      //     }
      // })
})

console.log(`just before 2nd $soap ..`)

$.soap({
	url: 'http://localhost:57280/BrokerService.svc/',
	method: 'GetById',

	 data: { Id: 1	},

	success: function (soapResponse) {
    console.log(`Successful in $.soap, Check it Mo:`)

    soapResponse.toString();
		// do stuff with soapResponse
		// if you want to have the response as JSON use soapResponse.toJSON();
		// or soapResponse.toString() to get XML string
		// or soapResponse.toXML() to get XML DOM
	},
	error: function (SOAPResponse) {
    // show error
    console.log(`Error in $.soap, Check it Mo: ${SOAPResponse}`)
	}
});

// function TestingWCFRestWithJsonp() {
//   $.ajax({
//       url: "http://localhost:57280/BrokerService.svc/GetAll",
//       dataType: "jsonp",
//       type: "GET",
//       timeout: 10000,
//       jsonpCallback: "MyCallback",
//       success: function (data, textStatus, jqXHR) {
//       },
//       error: function (jqXHR, textStatus, errorThrown) {    
//       },
//       complete: function (jqXHR, textStatus) {
//       }
//   });
// }

// function MyCallback(data) {
//   alert(data);
// }
 //Show alert message
//  showAlert(message, className) {
//   // Clear any remaining alerts
//   this.clearAlert();
//   // Create div
//   const div = document.createElement('div');
//   //Add classes
//   div.className = className;
//   // Add text
//   div.appendChild(document.createTextNode(message));
//   // Get parent
//   const container = document.querySelector('.searchContainer');
//   // Get search box
//   const search = document.querySelector('.search');
//   // Insert alert
//   container.insertBefore(div, search)
// }

//     // Clear Alert
//     clearAlert() {
//       const currentAlert = document.querySelector('.alert');
//       if(currentAlert) {
//           currentAlert.remove();
//       }
//   }
