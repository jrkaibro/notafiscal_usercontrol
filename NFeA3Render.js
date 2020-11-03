function NFeA3($)
{
	this.Attribute;
	this.NotSupportedDevice = ((gx.util.browser.isIPhone() || gx.util.browser.isIPad()) && navigator.userAgent.match(/OS [1-4]{1}(_\d)+ like Mac OS X/i));
	this.extensionId = "hlaigffiiacnbddimlifbpgigmmildah"; // Version Extension teste

	// Databinding for property Attribute
	this.SetAttribute = function(data)
	{
		///UserCodeRegionStart:[SetAttribute] (do not remove this comment.)
		this.Attribute = data;
		///UserCodeRegionEnd: (do not remove this comment.)
	}

	// Databinding for property Attribute
	this.GetAttribute = function()
	{
		///UserCodeRegionStart:[GetAttribute] (do not remove this comment.)
		return this.GetData();
		///UserCodeRegionEnd: (do not remove this comment.)
	}

	this.show = function()
	{
		///UserCodeRegionStart:[show] (do not remove this comment.)
		
		var _this = this;
		
		///UserCodeRegionEnd: (do not remove this comment.)
	}
	///UserCodeRegionStart:[User Functions] (do not remove this comment.)
	
	this.Transmitir = function(obj){

		this.onInitialize();
	
		/* this.ContainerName */
		
		console.log(obj.Nota);
		console.log(obj.XML);
		console.log(obj.Modelo);
		console.log(obj.Processo);
		
		this.SendApi(obj)		
	}

	this.GetData = function() {
		return this.Attribute;
	}

	this.SendApi = function(parm) {


	
		sendExtension(parm)
		this.SetAttribute("tete"); // Retorna para Genexus
		this.onComplete();
	}


	///UserCodeRegionEnd: (do not remove this comment.):
}


function sendExtension(parm) {
	chrome.runtime.sendMessage("hlaigffiiacnbddimlifbpgigmmildah",parm,function(response) {
		if (!response.success)
		handleError(url);
	});
}