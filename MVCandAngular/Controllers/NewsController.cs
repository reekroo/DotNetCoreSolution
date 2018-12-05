using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Xml.Linq;

using Microsoft.AspNetCore.Mvc;

using MVCandAngular.Models;

namespace MVCandAngular.Controllers
{
    [Route("api/news")]
    public class NewsController : Controller
    {

        [HttpGet("people")]
        public JsonResult GetPeopleOnliner()
        {
            return new JsonResult(GetRssNodes("https://people.onliner.by/feed"));
        }

        [HttpGet("auto")]
        public JsonResult GetAutoOnliner()
        {
            return new JsonResult(GetRssNodes("https://auto.onliner.by/feed"));
        }

        [HttpGet("tech")]
        public JsonResult GetTechOnliner()
        {
            return new JsonResult(GetRssNodes("https://tech.onliner.by/feed"));
        }

        [HttpGet("realt")]
        public JsonResult GetRealtOnliner()
        {
            return new JsonResult(GetRssNodes("https://realt.onliner.by/feed"));
        }

        [HttpGet("tut")]
        public JsonResult GetTopTut()
        {
            return new JsonResult(GetRssNodes("https://news.tut.by/rss/all.rss"));
        }

        [HttpGet("belaruspartisan")]
        public JsonResult GetTopBelarusPartisan()
        {
            return new JsonResult(GetRssNodes("https://belaruspartisan.by/rss/all/"));
        }

        [HttpGet("nashaniva")]
        public JsonResult GetTopNashaNiva()
        {
            return new JsonResult(GetRssNodes("https://nn.by/?c=rss-top&lang=ru"));
        }
        
        [HttpGet("belsat")]
        public JsonResult GetTopBelsat()
        {
            return new JsonResult(GetRssNodes("https://belsat.eu/ru/feed/"));
        }

        [HttpGet("svoboda")]
        public JsonResult GetTopSvoboda()
        {
            return new JsonResult(GetRssNodes("https://www.svoboda.org/api/z-pqpiev-qpp"));
        }

        private IEnumerable<News> GetRssNodes(string rssLink)
        {                        
            var nodes = GetRss(rssLink).Elements().Elements().Elements().Where(e => e.Name.LocalName == "item");
            
            var result = nodes.Select(x => new News()
            {
                Title = x.Elements().First(e => e.Name.LocalName == "title").Value,
                Url = x.Elements().First(e => e.Name.LocalName == "link").Value,
                UrlToImage = x.Elements().Any(e => e.Name.LocalName == "thumbnail")
                                ? x.Elements().First(e => e.Name.LocalName == "thumbnail").FirstAttribute.Value     //onliner
                                : x.Elements().Any(e => e.Name.LocalName == "enclosure")
                                    ? x.Elements().First(e => e.Name.LocalName == "enclosure").FirstAttribute.Value    //tut
                                    : string.Empty,
                Description = x.Elements().Any(e => e.Name.LocalName == "description")
                                ? ParseHtmlString(x.Elements().First(e => e.Name.LocalName == "description").Value)
                                : string.Empty,
                PublishedAt = x.Elements().First(e => e.Name.LocalName == "pubDate").Value,
            });
            
            return result;
        }

        private XDocument GetRss(string rssLink)
        {
            byte[] data;

            using (WebClient webClient = new WebClient())
            {
                data = webClient.DownloadData(rssLink);
            }

            string str = Encoding.GetEncoding("UTF-8").GetString(data);

            XDocument rssXmlDoc = XDocument.Parse(str);

            return rssXmlDoc;
        }

        private string ParseHtmlString(string htmlString)
        {
            var result = string.Empty;

            var htmlDoc = new HtmlAgilityPack.HtmlDocument();
            htmlDoc.LoadHtml(htmlString);

            if (htmlDoc.DocumentNode == null)
            {
                return result;
            }

            if (htmlDoc.DocumentNode.SelectSingleNode("//p[2]") != null) //onliner
            {
                result = htmlDoc.DocumentNode.SelectSingleNode("//p[2]").InnerText;
            }
            else if (htmlDoc.DocumentNode.InnerText != null) // tut
            {
                result = htmlDoc.DocumentNode.InnerText;
            }

            return result;
        }
    }
}
