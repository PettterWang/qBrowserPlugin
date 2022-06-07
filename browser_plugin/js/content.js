function controlListener()
{
    document.addEventListener("contextmenu", function (event) {event.stopPropagation();}, true);

    document.addEventListener("keydown", function (event) {event.stopPropagation();}, true);
    
    document.addEventListener("paste", function (event) {event.stopPropagation();}, true);
    document.addEventListener("copy", function (event) {event.stopPropagation();}, true);
    
    document.addEventListener("mousemove", function (event) {event.stopPropagation();}, true);
    
    document.addEventListener("mouseout", function (event) {event.stopPropagation();}, true);
}

function drawDivBorder(){
    $('div').each(function(index) {
        // console.log(index + ": " + $(this).text());

        //$(this).css({"border-color": "red", "border-width":"1px", "border-style":"solid"});

        $(this).css({"border-color": "red", "border-width":"1px", "border-style":"dashed"});
    });
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    //
    if(message.action==="Div画框")
    {
        drawDivBorder();
    }
    if(message.action==="编辑网页")
    {
        document.body.contentEditable='true';
    }
    if(message.action==="释放右键")
    {
        document.addEventListener("contextmenu", function (event) {event.stopPropagation();}, true);
    }
    if(message.action==="打印密码")
    {
        $("input[type='password']").each(function(index) {
            alert($(this).val());
            console.log($(this).val());
        });
    }
    if(message.action==="释放F12")
    {
        document.addEventListener("keydown", function (event) {event.stopPropagation();}, true);
    }
    if(message.action==="智能绿化")
    {
        //
        $("[class*='read-all']").each(function(index) {
            $(this).click();
        });

        //
        $("html, body").animate({ scrollTop: $(document).height()-$(window).height() }, 500);
        
        //
        $("html, body").animate({ scrollTop: 0 }, 500);

        //
        var fixed = $('*').filter(function () { 
            return $(this).css('position') == 'fixed';
        });
        //
        fixed.each(function(index) {
            $(this).remove();
        });

        //
        $("[class*='header']").each(function(index) {
            $(this).remove();
        });
        //
        $("[class*='vip']").each(function(index) {
            $(this).remove();
        });
        //
        $("[class*='relative']").each(function(index) {
            $(this).remove();
        });
        //
        $("[class*='comment']").each(function(index) {
            $(this).remove();
        });
        //
        $("[class*='recommend']").each(function(index) {
            $(this).remove();
        });
        //
        $("[class*='warp']").each(function(index) {
            $(this).remove();
        });
        //
        $("[class*='recom']").each(function(index) {
            $(this).remove();
        });
    }
    //
    sendResponse({status: 'everything is ok'});
    //
    return true
});