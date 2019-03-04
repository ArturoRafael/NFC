 function send(){
        var hrf = $('#url').val();
        if(hrf.length>0){
          var c = hrf.indexOf("?");
          if(c != "-1")
            hrf += "&id={TAG-ID}";
          else{
            hrf += "?id={TAG-ID}";
          }

          hrf += "&size={TAG-SIZE}";
          hrf += "&maxsize={TAG-MAXSIZE}";
          hrf += "&type={TAG-TYPE}";
          hrf += "&iswritable={TAG-ISWRITABLE}";
          hrf += "&canmakereadonly={TAG-CANMAKEREADONLY}";
            
          //Adding callback tag records.
          hrf += "&ndef-text={NDEF-TEXT}";
          hrf += "&ndef-uri={NDEF-URI}"; 
            
          //Just an anchor
          hrf += "#result";

          location.href="nfc://scan/?callback="+hrf;
          /*
          var id = getQueryVariable("id");
          if(id.length>0){
            $('#idtag').text(id);
          }
          var size = getQueryVariable("size");
          if(size.length>0){
            $('#sizetag').text(size);
          }
          var maxsize = getQueryVariable("maxsize");
          if(maxsize.length>0){
            $('#maxsizetag').text(maxsize);
          }
          var type = getQueryVariable("type");
          if(type.length>0){
            $('#typetag').text(type);
          }
          var iswritable = getQueryVariable("iswritable");
          if(iswritable.length>0){
            $('#iswritabletag').text(iswritable);
          }
          var canmakereadonly = getQueryVariable("canmakereadonly");
          if(canmakereadonly.length>0){
            $('#canmakereadonlytag').text(canmakereadonly);
          }

          var ndeftext = getQueryVariable("ndef-text");
          if(ndeftext.length>0){
            $('#ndeftexttag').text(ndeftext);
          }

          var ndefuri = getQueryVariable("ndef-uri");
          if(ndefuri.length>0){
            $('#ndefuritag').text(ndefuri);
          }
          
          $('.result_jumbotron').fadeIn();
          */

        }else{
          $('#url').focus();
        }
      }

      function getQueryVariable(variable) {
        var query =  window.location.search.substring(1);
        var vars = query.split("&");
        for (var i=0; i < vars.length; i++) {
            var pair = vars[i].split("="); 
            if (pair[0] == variable) {
                return pair[1];
            }
        }
        return false;
      }

