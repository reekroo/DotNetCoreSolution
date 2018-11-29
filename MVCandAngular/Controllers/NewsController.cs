﻿using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Xml;
using System.Xml.Linq;
using Microsoft.AspNetCore.Mvc;

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

        private IEnumerable<News> GetRssNodes(string rssLink)
        {
            byte[] data;

            using (WebClient webClient = new WebClient())
            {
                data = webClient.DownloadData(rssLink);
            }

            string str = Encoding.GetEncoding("UTF-8").GetString(data);
            
            XDocument rssXmlDoc = XDocument.Parse(str);
                        
            var nodes = rssXmlDoc.Elements().Elements().Elements().Where(e => e.Name.LocalName == "item");

            //var result = new List<News>();

            //foreach (XElement node in nodes)
            //{
            //    result.Add(new News()
            //    {
            //        Title = node.Elements().First(e => e.Name.LocalName == "title").Value,
            //        Url = node.Elements().First(e => e.Name.LocalName == "link").Value,
            //        UrlToImage = node.Elements().First(e => e.Name.LocalName == "thumbnail").FirstAttribute.Value,
            //        Description = node.Elements().First(e => e.Name.LocalName == "description").Value,
            //        PublishedAt = node.Elements().First(e => e.Name.LocalName == "pubDate").Value,
            //    });
            //}

            var result = nodes.Select(x => new News(){
                Title = x.Elements().First(e => e.Name.LocalName == "title").Value,
                Url = x.Elements().First(e => e.Name.LocalName == "link").Value,
                UrlToImage = x.Elements().First(e => e.Name.LocalName == "thumbnail").FirstAttribute.Value,
                Description = x.Elements().First(e => e.Name.LocalName == "description").Value,
                PublishedAt = x.Elements().First(e => e.Name.LocalName == "pubDate").Value,
            });

            return result;
        }
    }

    public class News
    {
        public string Author { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Url { get; set; }
        public string UrlToImage { get; set; }
        public string PublishedAt { get; set; }
    }
}