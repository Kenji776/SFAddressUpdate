Salesforce Address Transform is a simple nodeJS application for changing the 'integration value' for values stores in the Address Settings meta data to the isoCode for countries in the united states (you can make it process all countries if you set the 'onlyProcessUS' in the process.js file to false). For example it will change Alaska to AK, Florida to FL, etc. Simple store your Address.settings-meta.xml file in the same folder as the script and run the runProcess.bat file (or manually call it from your terminal, either way). This will output a Address.settings-meta-fixed.xml file that you can copy and paste the contents of into your original Address.settings-meta.xml file and push into your org. 

You can use

<?xml version="1.0" encoding="UTF-8"?> 
<Package xmlns="http://soap.sforce.com/2006/04/metadata"> 
	<version>46.0</version> 
	<types> 
		<members>Address</members> 
		<name>Settings</name> 
	</types> 
</Package>

In your package XML to pull the original file to modify.

See https://iwritecrappycode.wordpress.com/2020/05/03/mass-updating-salesforce-country-and-state-picklist-integration-values/ for more info.