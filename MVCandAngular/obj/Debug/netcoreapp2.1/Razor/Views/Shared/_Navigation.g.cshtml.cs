#pragma checksum "D:\My\DotNetCore\MVCandAngular\Views\Shared\_Navigation.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "00e97873f7f0ea57145fe030fdd11d5c13b8faba"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Shared__Navigation), @"mvc.1.0.view", @"/Views/Shared/_Navigation.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Shared/_Navigation.cshtml", typeof(AspNetCore.Views_Shared__Navigation))]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"00e97873f7f0ea57145fe030fdd11d5c13b8faba", @"/Views/Shared/_Navigation.cshtml")]
    public class Views_Shared__Navigation : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            BeginContext(0, 2505, true);
            WriteLiteral(@"<div class='main-nav'>
    <div class='navbar navbar-inverse navbar-default'>

        <div class='navbar-header'>
            <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse' [attr.aria-expanded]='isExpanded' (click)='toggle()'>
                <span class='sr-only'>Toggle navigation</span>
                <span class='icon-bar'></span>
                <span class='icon-bar'></span>
                <span class='icon-bar'></span>
            </button>
            <a class='navbar-brand' [routerLink]='[""/""]'>Portal</a>
        </div>

        <div class='clearfix'></div>

        <div class='navbar-collapse collapse'>
            <ul class='nav navbar-nav'>
                <li>
                    <a href=""/""><span class='glyphicon glyphicon-home'></span> Home</a>
                </li>
                <li>
                    <a href=""/news""><span class='glyphicon glyphicon-list'></span> News</a>
                </li>
                <li c");
            WriteLiteral(@"lass=""dropdown"">
                    <a href=""#"" class=""dropdown-toggle"" data-toggle=""dropdown"" role=""button"" aria-haspopup=""true"" aria-expanded=""true"">
                        <span class='glyphicon glyphicon-piggy-bank'></span>
                        National Bank RB
                        <span class=""caret""></span>
                    </a>
                    <ul class=""dropdown-menu"">
                        <li><a href=""/bank"">Currencies</a></li>
                        <li><a href=""/metal"">Ingots</a></li>
                    </ul>
                </li>
                <li>
                    <a href=""/oil""><span class='glyphicon glyphicon-oil'></span> oil</a>
                </li>
                <li class=""dropdown"">
                    <a href=""#"" class=""dropdown-toggle"" data-toggle=""dropdown"" role=""button"" aria-haspopup=""true"" aria-expanded=""true"">Training <span class=""caret""></span></a>
                    <ul class=""dropdown-menu"">
                        <li><a href=""/products");
            WriteLiteral(@"""><span class='glyphicon glyphicon-hdd'></span> Products</a></li>
                        <li role=""separator"" class=""divider""></li>
                        <li><a href=""/shop""><span class='glyphicon glyphicon-shopping-cart'></span> Shop</a></li>
                        <li><a href=""/user""><span class='glyphicon glyphicon-user'></span> My</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</div>");
            EndContext();
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591
