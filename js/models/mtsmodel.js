dojo.require('esri.map');
dojo.require('esri.tasks.query');
function init () {
var queryTask = new esri.tasks.QueryTask("http://gis.oki.org/ArcGIS/rest/services/OP/TOD_data/MapServer/10");
      var query = new esri.tasks.Query();
        query.where = "TransitSystem = 'MTS'";
        query.returnGeometry = false;
        query.outFields = ["*"];
        return queryTask.execute(query, function(results) {
            // console.log(results.features.length);
            for (var i = 0, il=results.features.length; i<il; i++) {
                var fAttributes = results.features[i].attributes;
                
                // console.log(fAttributes);
            
                ID = fAttributes.ID;
                STIP = fAttributes.STIP;
                MPO = fAttributes.MPO;
                TransitSystem = fAttributes.TransitSystem;
                FTAALI = fAttributes.FTAALI;
                Description = fAttributes.Description;
                PID = fAttributes.PID;
                Quantity = fAttributes.Quantity;
                EorR = fAttributes.EorR;
                Accessible = fAttributes.Accessible;
                Air_Quality = fAttributes.Air_Quality;
                Type = fAttributes.Type;
                State_FY = fAttributes.State_FY;
                Fiscally_Constrained = fAttributes.Fiscally_Constrained;
                Federal_Funding = "$"+addCommas(fAttributes.Federal_Funding);
                Federal_Funding_Source = fAttributes.Federal_Funding_Source;
                State_Funding = "$"+addCommas(fAttributes.State_Funding);
                State_Funding_Source = fAttributes.State_Funding_Source;
                Local_Funding = "$"+addCommas(fAttributes.Local_Funding);
                Local_Funding_Source = fAttributes.Local_Funding_Source;

                data ={
                    ID: ID,
                    STIP: STIP,
                    MPO: MPO,
                    TransitSystem: TransitSystem,
                    FTAALI: FTAALI,
                    Description: Description,
                    PID: PID,
                    Quantity: Quantity,
                    EorR: EorR,
                    Accessible: Accessible,
                    Air_Quality: Air_Quality,
                    Type: Type,
                    State_FY: State_FY,
                    Fiscally_Constrained: Fiscally_Constrained,
                    Federal_Funding: Federal_Funding,
                    Federal_Funding_Source: Federal_Funding_Source,
                    State_Funding: State_Funding,
                    State_Funding_Source: State_Funding_Source,
                    Local_Funding: Local_Funding,
                    Local_Funding_Source: Local_Funding_Source
                };
                
                this.mtscollection.add({
                    ID: ID,
                    STIP: STIP,
                    MPO: MPO,
                    TransitSystem: TransitSystem,
                    FTAALI: FTAALI,
                    Description: Description,
                    PID: PID,
                    Quantity: Quantity,
                    EorR: EorR,
                    Accessible: Accessible,
                    Air_Quality: Air_Quality,
                    Type: Type,
                    State_FY: State_FY,
                    Fiscally_Constrained: Fiscally_Constrained,
                    Federal_Funding: Federal_Funding,
                    Federal_Funding_Source: Federal_Funding_Source,
                    State_Funding: State_Funding,
                    State_Funding_Source: State_Funding_Source,
                    Local_Funding: Local_Funding,
                    Local_Funding_Source: Local_Funding_Source
                });
            }

        });
}

window.MtsModel = Backbone.Model.extend({
    defaults: {
        ID: "",
        STIP: "",
        MPO: "",
        TransitSystem: "",
        FTAALI: "",
        Description: "",
        PID: "",
        Quantity: "",
        EorR: "",
        Accessible: "",
        Air_Quality: "",
        Type: "",
        State_FY: "",
        Fiscally_Constrained: "",
        Federal_Funding: "",
        Federal_Funding_Source: "",
        State_Funding: "",
        State_Funding_Source: "",
        Local_Funding: "",
        Local_Funding_Source: ""
        },

    initialize: function() {
      // console.log('this model has been initialized');
    }
    
});

window.MtsCollection = Backbone.Collection.extend({
  model: MtsModel,
  comparator: function(mtsmodel) {
    return mtsmodel.get("PID");
      
  }
  
});

dojo.addOnLoad(init);
this.mtscollection = new MtsCollection();
this.mtsmodel = new MtsModel();
// console.log("MTS", mtscollection);
