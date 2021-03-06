var AppRouter = Backbone.Router.extend({

    routes: {
        ""                  : "home",
        "about"             : "about",
        "highway"           : "highway",
        "transit"           : "transit",
        "map"               : "map",
        "highwayList"       : "highwayList",
        "butlerList"        : "butlerList",
        "booneList"         : "booneList",
        "campbellList"      : "campbellList",
        "clermontList"      : "clermontList",
        "dearbornList"      : "dearbornList",
        "hamiltonList"      : "hamiltonList",
        "kentonList"        : "kentonList",
        "warrenList"        : "warrenList",
        "okiList"           : "okiList",
        "bcrtaList"         : "bcrtaList",
        "ctcList"           : "ctcList",
        "mtsList"           : "mtsList",
        "sortaList"         : "sortaList",
        "tankList"          : "tankList",
        "wctaList"          : "wctaList"

    },

    initialize: function () {
        // console.log("doit");
        this.headerView = new HeaderView();
        $('.header').html(this.headerView.el);
        // console.log("loading.....");
    },

    home: function (id) {
        if (!this.homeView) {
            this.homeView = new HomeView();
            // console.log("hey homey");
        }
        $('#content').html(this.homeView.el);
        this.headerView.selectMenuItem('home-menu');
    },

    about: function () {
        if (!this.aboutView) {
            this.aboutView = new AboutView();
        }
        $('#content').html(this.aboutView.el);
        this.headerView.selectMenuItem('about-menu');
    },

    map: function () {
        if (!this.mapView) {
            this.mapView = new MapView();
        }
        $('#content').html(this.mapView.el);
        this.headerView.selectMenuItem('map-menu');
    },

    highway: function () {
        if (!this.highwayView) {
            this.highwayView = new HighwayView();
        }
        $('#content').html(this.highwayView.el);
        this.headerView.selectMenuItem('highway-menu');
    },

    highwayList: function () {
        if (!this.highwayListView) {
            this.highwayListView = new HighwayListView();
        }
        $('#content').html( this.highwayListView.el);
        this.headerView.selectMenuItem('highway-menu');
    },
    butlerList: function () {
        if (!this.butlerListView) {
            this.butlerListView = new ButlerListView();
        }
        $('#content').html(this.butlerListView.el);
        this.headerView.selectMenuItem('highway-menu');
    },

    booneList: function () {
        if (!this.booneListView) {
            this.booneListView = new BooneListView();
        }
        $('#content').html(this.booneListView.el);
        this.headerView.selectMenuItem('highway-menu');
    },

    campbellList: function () {
        if (!this.campbellListView) {
            this.campbellListView = new CampbellListView();
        }
        $('#content').html(this.campbellListView.el);
        this.headerView.selectMenuItem('highway-menu');
    },

    clermontList: function () {
        if (!this.clermontListView) {
            this.clermontListView = new ClermontListView();
        }
        $('#content').html(this.clermontListView.el);
        this.headerView.selectMenuItem('highway-menu');
    },

    dearbornList: function () {
        if (!this.dearbornListView) {
            this.dearbornListView = new DearbornListView();
        }
        $('#content').html(this.dearbornListView.el);
        this.headerView.selectMenuItem('highway-menu');
    },

    hamiltonList: function () {
        if (!this.hamiltonListView) {
            this.hamiltonListView = new HamiltonListView();
        }
        $('#content').html(this.hamiltonListView.el);
        this.headerView.selectMenuItem('highway-menu');
    },

    kentonList: function () {
        if (!this.kentonListView) {
            this.kentonListView = new KentonListView();
        }
        $('#content').html(this.kentonListView.el);
        this.headerView.selectMenuItem('highway-menu');
    },

    warrenList: function () {
        if (!this.warrenListView) {
            this.warrenListView = new WarrenListView();
        }
        $('#content').html(this.warrenListView.el);
        this.headerView.selectMenuItem('highway-menu');
    },

    okiList: function () {
        if (!this.okiListView) {
            this.okiListView = new OkiListView();
        }
        $('#content').html(this.okiListView.el);
        this.headerView.selectMenuItem('transit-menu');
    },

    bcrtaList: function () {
        if (!this.bcrtaListView) {
            this.bcrtaListView = new BcrtaListView();
        }
        $('#content').html(this.bcrtaListView.el);
        this.headerView.selectMenuItem('transit-menu');
    },

    ctcList: function () {
        if (!this.ctcListView) {
            this.ctcListView = new CtcListView();
        }
        $('#content').html(this.ctcListView.el);
        this.headerView.selectMenuItem('transit-menu');
    },

    mtsList: function () {
        if (!this.mtsListView) {
            this.mtsListView = new MtsListView();
        }
        $('#content').html(this.mtsListView.el);
        this.headerView.selectMenuItem('transit-menu');
    },

    sortaList: function () {
        if (!this.sortaListView) {
            this.sortaListView = new SortaListView();
        }
        $('#content').html(this.sortaListView.el);
        this.headerView.selectMenuItem('transit-menu');
    },

    tankList: function () {
        if (!this.tankListView) {
            this.tankListView = new TankListView();
        }
        $('#content').html(this.tankListView.el);
        this.headerView.selectMenuItem('transit-menu');
    },

    wctaList: function () {
        if (!this.wctaListView) {
            this.wctaListView = new WctaListView();
        }
        $('#content').html(this.wctaListView.el);
        this.headerView.selectMenuItem('transit-menu');
    },

    transit: function () {
        if (!this.transitView) {
            this.transitView = new TransitView();
        }
        $('#content').html(this.transitView.el);
        this.headerView.selectMenuItem('transit-menu');
    }
    
});

utils.loadTemplate(['HomeView', 'HeaderView', 'AboutView', 'HighwayView', 'TransitView', 'MapView'], function() {
    app = new AppRouter();
    Backbone.history.start();
});
