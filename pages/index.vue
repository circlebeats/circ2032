<template>
  <div class="container">
    <SearchBar/>
    <div class="section">
      <h1>Featured Beats</h1>
      <div class="row" id="row1">
        <HomepageBeatHolder
          v-if="beat.fid <= 5"
          v-for="beat in this.$store.getters.allBeats"
          :key="beat.title" :title="beat.title"
          :producer="beat.producer"
          :tag1="beat.userTag1"
          :tag2="beat.filterTag2"
          :url="beat.url"
          :plays="beat.plays"
        />
      </div>
      <div class="section">
        <h1> Genre Filter</h1>
        <div class="filterCols">
          <div class="filterCol1">
            <HomepageGenreFilter />
          </div>
          <div class="filterCol2">
            <HomepageFilterBeats/>
          </div>
        </div>
      </div>
      <div class="section">
        <h1>License Agreements</h1>
        <div class="section">
          <div class="licenseCols">
            <HomepageLicenseBlock
              v-for="license in licenses"
              :key="license.id"
              :type="license.id"
              :description="license.description"
              :salesCap='license.salesCap'
              :streams="license.streams"
              :duration="license.duration"
              :performanceRights="license.performanceRights"
              :publishinSplit="license.publishingSplit"
              :territory="license.territory"
              :credits="license.credits"
              :qualities="license.qualities"
            />
          </div>
        </div>
      </div>
      <div class="section">
        <div class="bottomCols">
          <div class="youtubeCol">
            <vue-plyr>
              <div data-plyr-provider="youtube" data-plyr-embed-id="-uRuSAzPX5k"></div>
            </vue-plyr>
          </div>
          <div class="beatsCol"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .filterCol1{
    flex-grow: 1;
    display: flex;
    flex-direction: row;
  }
  .filterCol2{
    flex-grow: 2;
    display: flex;
    flex-direction: column;
  }
  .filterCols {
    display: flex;
    flex-direction: row;
    width: 100%;
  }
  h4{
    font-family: 'Nunito Sans';
    font-weight: 400;
    font-size: 1rem;
    color: #848c8e;
  }
  h2 {
    font-family: 'Nunito Sans';
    font-weight: 800;
    font-size: 2rem;
    color: white;
    text-decoration: underline;
  }
  p{
    font-family: 'Nunito';
    font-weight: 400;
    font-size: .8rem;
    color: white;
  }
  .beatsCol{
    width: 500px;
  }
  .youtubeCol{
    width: 800px;
  }
  .bottomCols {
    display: inline-flex;
  }
  .license:hover{
    box-shadow: 0 0 20px 2px rgba(107,70,70, 1);
  }
  .license {
    grid-column: span 1;
    background-color: #47494e;
    width: 100%;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 0 10px 1px rgba(107,70,70, .5);
    background-color: rgba(127,10,10,0.1);
    transition: box-shadow 0.3s ease-in-out;
    padding: 10px;
  }
  .licenseCols {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 750px;
    grid-column-gap: 20px;
    padding: 50px 50px;
  }

  h3:hover {
    color: #3b8070;
  }


  .trackInfo {
    display: flex;
    flex-grow: 5;
    order: 1;
    margin-top: 10px;
    height: 100px;
    flex-direction: column;
  }


  .section{
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-width: 5px;
    height: 100%;
    border-style: solid;
    margin: 10px 10px;
    border-radius: 5px;
  }

  .row{
    display: flex;
    justify-content: space-evenly;
    margin: 0;
  }
  .container {
    margin: 0 auto;
    display: inline-flex;
    width: 100%;
    background-color: #0e0e0e;
    flex-direction: column;
  }
  h1{
    font-family: 'Damion';
    font-size: 6rem;
    margin-left: 40px;
    color: white;
  }
</style>
<script>
  // TODO: Move import for wavesurfer over to component
  import SearchBar from "../components/global/SearchBar";
  import HomepageBeatHolder from "../components/homepage/HomepageBeatHolder";
  import HomepageLicenseBlock from "../components/homepage/HomepageLicenseBlock";
  import HomepageGenreFilter from "../components/homepage/HomepageGenreFilter";
  import HomepageFilterBeats from "../components/homepage/HomepageFilterBeats";
  export default {
    components: { HomepageFilterBeats, HomepageGenreFilter, HomepageLicenseBlock, HomepageBeatHolder, SearchBar },
    asyncData () {
      return  {
        licenses: [
          //add licences from server
        ],
      }
    },
  }
</script>
