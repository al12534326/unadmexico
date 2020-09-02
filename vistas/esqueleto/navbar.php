   <section class="search-and-user">
   <!--<form>
     <input type="search" placeholder="Search Pages...">
     <button type="submit" aria-label="submit form">
       <svg aria-hidden="true">
         <use xlink:href="#search"></use>
       </svg>
     </button>
   </form>-->
   <br>


   <div class="admin-profile">
     <span class="greeting"><?php echo $_SESSION['Vusuario']?></span>
     <div class="notifications" onclick="entro()">
      <!-- <span class="badge">1</span>-->
       <svg>
         <use xlink:href="#settings"></use>
       </svg>
     </div>
   </div> 
 </section>


  