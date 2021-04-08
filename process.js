const fs = require('fs');
var xml2js = require('xml2js');
var parseString = xml2js.parseString;

boolean onlyProcessUS = false;

try 
{
	const data = fs.readFileSync('Address.settings-meta.xml', 'utf8')

	parseString(data, function (err, result) {
		

		var root = result.AddressSettings.countriesAndStates[0].countries;
		//console.log(root);

		for(var i = 0; i < root.length; i++)
		{
			
			var countryName = root[i].integrationValue[0];
			if(countryName == 'United States' || onlyProcessUS == false)
			{
				if(root[i].hasOwnProperty('states'))
				{
					for(var j = 0; j < root[i].states.length; j++)
					{
						console.log('Changing ' + root[i].states[j].integrationValue[0] + ' to ' + root[i].states[j].isoCode[0]);
						root[i].states[j].integrationValue[0] = root[i].states[j].isoCode[0];
					}
				}
			}
		}
		
		var builder = new xml2js.Builder();
		var xml = builder.buildObject(result);
	
		fs.writeFile("Address.settings-meta-fixed.xml", xml, function(err) {
			if(err) {
				return console.log(err);
			}
			console.log("The file was saved!");
		}); 	
	});
	
} 
catch (err) 
{
	console.error(err)
}

