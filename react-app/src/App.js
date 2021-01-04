import "./App.css";
import React from "react";
import logo from "./logo.png";
import "@fontsource/fredoka-one";
import "@fontsource/space-mono";

function getUrl() {
  var urls = [
    '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Looking sharp! ??Hope everyone had a fantastic weekend! ????<a href="https://twitter.com/hashtag/familyportrait?src=hash&amp;ref_src=twsrc%5Etfw">#familyportrait</a> <a href="https://twitter.com/hashtag/portrait?src=hash&amp;ref_src=twsrc%5Etfw">#portrait</a> <a href="https://twitter.com/hashtag/newyears?src=hash&amp;ref_src=twsrc%5Etfw">#newyears</a> <a href="https://twitter.com/hashtag/newyearnewme?src=hash&amp;ref_src=twsrc%5Etfw">#newyearnewme</a> <a href="https://twitter.com/hashtag/mansbestfriend?src=hash&amp;ref_src=twsrc%5Etfw">#mansbestfriend</a> <a href="https://twitter.com/hashtag/dog?src=hash&amp;ref_src=twsrc%5Etfw">#dog</a> <a href="https://twitter.com/hashtag/christmas?src=hash&amp;ref_src=twsrc%5Etfw">#christmas</a> <a href="https://twitter.com/hashtag/sony?src=hash&amp;ref_src=twsrc%5Etfw">#sony</a> <a href="https://twitter.com/hashtag/sonyalpha?src=hash&amp;ref_src=twsrc%5Etfw">#sonyalpha</a> <a href="https://twitter.com/hashtag/weddingprofessional?src=hash&amp;ref_src=twsrc%5Etfw">#weddingprofessional</a> <a href="https://twitter.com/hashtag/newjersey?src=hash&amp;ref_src=twsrc%5Etfw">#newjersey</a> <a href="https://twitter.com/hashtag/newyork?src=hash&amp;ref_src=twsrc%5Etfw">#newyork</a> <a href="https://twitter.com/hashtag/connecticut?src=hash&amp;ref_src=twsrc%5Etfw">#connecticut</a> <a href="https://twitter.com/hashtag/eventphotography?src=hash&amp;ref_src=twsrc%5Etfw">#eventphotography</a> <a href="https://twitter.com/hashtag/nicholasyeephotography?src=hash&amp;ref_src=twsrc%5Etfw">#nicholasyeephotography</a> <a href="https://t.co/juHBUPwXzN">pic.twitter.com/juHBUPwXzN</a></p>&mdash; Nicholas Yee (@nickyeephoto_) <a href="https://twitter.com/nickyeephoto_/status/1345765628515389443?ref_src=twsrc%5Etfw">January 3, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
    '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">The base of the bowls is adorned with pearls which are hand laid individually and feature two removable stainless steel bowls.<br><br>BUY NOW! <a href="https://t.co/ToDuqCdEjy">https://t.co/ToDuqCdEjy</a><br><br>% of $ sales will support pet rescue.<a href="https://twitter.com/hashtag/dogs?src=hash&amp;ref_src=twsrc%5Etfw">#dogs</a> <a href="https://twitter.com/hashtag/likeforfollow?src=hash&amp;ref_src=twsrc%5Etfw">#likeforfollow</a> <a href="https://twitter.com/hashtag/dogsoftwitter?src=hash&amp;ref_src=twsrc%5Etfw">#dogsoftwitter</a> <a href="https://twitter.com/hashtag/ChristmasEve?src=hash&amp;ref_src=twsrc%5Etfw">#ChristmasEve</a> <a href="https://twitter.com/hashtag/Christmas?src=hash&amp;ref_src=twsrc%5Etfw">#Christmas</a> <a href="https://twitter.com/hashtag/doglovers?src=hash&amp;ref_src=twsrc%5Etfw">#doglovers</a> <a href="https://twitter.com/hashtag/pets?src=hash&amp;ref_src=twsrc%5Etfw">#pets</a> <a href="https://t.co/j70JFzOTv9">pic.twitter.com/j70JFzOTv9</a></p>&mdash; LePetLuxe (@lepetluxe) <a href="https://twitter.com/lepetluxe/status/1342541985282838529?ref_src=twsrc%5Etfw">December 25, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
    '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Friends,...it’s a Christmas card mail call from the most amazing friends <a href="https://twitter.com/BartlettTherese?ref_src=twsrc%5Etfw">@BartlettTherese</a>, <a href="https://twitter.com/ceinwenscales?ref_src=twsrc%5Etfw">@ceinwenscales</a>, <a href="https://twitter.com/andie_paws?ref_src=twsrc%5Etfw">@andie_paws</a>, <a href="https://twitter.com/BeanPaisley?ref_src=twsrc%5Etfw">@BeanPaisley</a>, <a href="https://twitter.com/lizandairedales?ref_src=twsrc%5Etfw">@lizandairedales</a> <br>&amp; my crush <a href="https://twitter.com/FlynnTheRescue?ref_src=twsrc%5Etfw">@FlynnTheRescue</a>,...as well as IG pals Licky Leo, Polly &amp; Dexi the Dal! I ?? you all!<a href="https://twitter.com/hashtag/dogs?src=hash&amp;ref_src=twsrc%5Etfw">#dogs</a> <a href="https://twitter.com/hashtag/dogsoftwitter?src=hash&amp;ref_src=twsrc%5Etfw">#dogsoftwitter</a> <a href="https://twitter.com/hashtag/Christmas?src=hash&amp;ref_src=twsrc%5Etfw">#Christmas</a> <a href="https://t.co/pn4gP1jqxq">pic.twitter.com/pn4gP1jqxq</a></p>&mdash; ????Daisy the Malti-pom???? (@daisy_pom) <a href="https://twitter.com/daisy_pom/status/1344674815030906880?ref_src=twsrc%5Etfw">December 31, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
    '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Matty from <a href="https://twitter.com/Matalan?ref_src=twsrc%5Etfw">@Matalan</a> has some amazing <a href="https://twitter.com/hashtag/Christmas?src=hash&amp;ref_src=twsrc%5Etfw">#Christmas</a> news he&#39;d like to share with you! ???????? <a href="https://twitter.com/hashtag/CatsOfTwitter?src=hash&amp;ref_src=twsrc%5Etfw">#CatsOfTwitter</a> <a href="https://twitter.com/hashtag/Cat?src=hash&amp;ref_src=twsrc%5Etfw">#Cat</a> <a href="https://twitter.com/hashtag/homeforchristmas?src=hash&amp;ref_src=twsrc%5Etfw">#homeforchristmas</a> <a href="https://twitter.com/hashtag/MerryChristmas2020?src=hash&amp;ref_src=twsrc%5Etfw">#MerryChristmas2020</a> <a href="https://twitter.com/waynebamber18?ref_src=twsrc%5Etfw">@waynebamber18</a> <a href="https://twitter.com/tracie_pullen?ref_src=twsrc%5Etfw">@tracie_pullen</a> ???? <a href="https://t.co/vFDHqzFUAr">pic.twitter.com/vFDHqzFUAr</a></p>&mdash; Save Our Scouse Cats (@SOSmoggies) <a href="https://twitter.com/SOSmoggies/status/1342540350859177984?ref_src=twsrc%5Etfw">December 25, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
  ];
  return urls;
}
function assemble(urls, start, end) {
  var html = "";

  for (var i = start; i < end; i++) {
    html += urls[i];
  }
  return html;
}
function App() {
  var urls = getUrl();
  var quarter = urls.length / 4; // To increment over 4 columns
  return (
    <div>
      <a
        href="https://www.linkedin.com/in/grace-n-nguyen/"
        target="_blank"
        rel="noreferrer"
      >
        <text fontFamily="Times-New-Roman">Grace Nguyen</text>
      </a>
      <div class="logo">
        <img src={logo} alt="Logo" width="15%" height="15%" />
        <text class="title">Petmas</text>
      </div>
      <div class="description">
        <p color="black">
          A curated project that fulfills all of your Christmas pet needs. A
          self-replenishing montage of Twitter posts featuring pets in their
          holiday spirit.
        </p>
      </div>

      <div
        class="column"
        dangerouslySetInnerHTML={{ __html: assemble(urls, 0, quarter) }}
      ></div>
      <div
        class="column"
        dangerouslySetInnerHTML={{
          __html: assemble(urls, quarter, quarter * 2),
        }}
      ></div>
      <div
        class="column"
        dangerouslySetInnerHTML={{
          __html: assemble(urls, quarter * 2, quarter * 3),
        }}
      ></div>
      <div
        class="column"
        dangerouslySetInnerHTML={{
          __html: assemble(urls, quarter * 3, quarter * 4),
        }}
      ></div>
    </div>
  );
}

export default App;

// const styles = StyleSheet.create({
//   text: { fontsize: "20px", color: "#4a54f1", textAlign: "center" },
// });
