const teamArea = document.querySelector(".team-list");

let teamList= ""; 

teams.map((item, index)=> { 

    teamList += `

    <div class="col-12 col-sm-6 col-lg-3 isotope-item leadership">
    <span class="thumb-info thumb-info-hide-wrapper-bg mb-4">
      <span class="thumb-info-wrapper">
        <a href="about-me.html">
          <img src="${item.images}" class="img-fluid" alt="" />
          <span class="thumb-info-title">
            <span class="thumb-info-inner">${item.name}</span>
            <span class="thumb-info-type">${item.designations}</span>
          </span>
        </a>
      </span>
      <span class="thumb-info-caption">
        <span class="thumb-info-caption-text">${item.descriptions} </span>
        <span class="thumb-info-social-icons mb-4">
          <a target="_blank" href="${item.social.facebook}"
            ><i class="fab fa-facebook-f"></i
            ><span>Facebook</span></a>
          <a href="${item.social.linkdin}"
            ><i class="fab fa-linkedin-in"></i
            ><span>Linkedin</span></a>
          <a href="${item.social.twitter}"
          ><i class="fab fa-twitter"></i
          ><span> twitter </span></a>
        </span>
      </span>
    </span>
  </div>


  `;
});

teamArea.innerHTML = teamList;

