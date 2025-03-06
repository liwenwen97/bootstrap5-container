export const data = [
  {
    key: '1',
    label: '模版',
    children: [
      {
        key: '1-1',
        label: '测试模版',
        code: [` <section style="background: linear-gradient(45deg, #172E72 0%, #28E398 50%, #28E398 100%) !important;">
 	<div class="container col-xxl-8 px-4 py-5">
 		<div class="row flex-lg-row-reverse align-items-center g-5 py-5">
 			<div class="col-10 col-sm-8 col-lg-6">
 				<img src="https://library.livecanvas.com/starters/wp-content/uploads/sites/15/2022/02/home_1.png" class="d-block mx-lg-auto img-fluid wp-image-1116" alt="" loading="lazy" width="800" height="905" srcset="https://library.livecanvas.com/starters/wp-content/uploads/sites/15/2022/02/home_1.png 800w, https://library.livecanvas.com/starters/wp-content/uploads/sites/15/2022/02/home_1-265x300.png 265w, https://library.livecanvas.com/starters/wp-content/uploads/sites/15/2022/02/home_1-768x869.png 768w" sizes="(max-width: 800px) 100vw, 800px">
 			</div>
 			<div class="col-lg-6">
 				<div class="lc-block mb-3">
 					<div editable="rich">
 						<h3><strong class="text-white-50">Welcome!</strong></h3>
 					</div>
 				</div>
 				<div class="lc-block mb-3">
 					<div editable="rich">
 						<h1 class="fw-bold display-3">Learn <span class="text-light">Bootstrap</span> from scratch</h1>
 					</div>
 				</div>

 				<div class="lc-block mb-4">
 					<div editable="rich">
 						<p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
 					</div>
 				</div>

 				<div class="lc-block col-lg-11 col-xl-10 text-white h5 lh-lg">

 					<form>

 						<div class="form-group mb-4">
 							<label>Your Name (optional)</label>
 							<input name="mouseglue" type="text" class="form-control" placeholder="John Doe" value="" autocomplete="off" hidden="">
 							<input name="name" type="text" class="form-control" placeholder="John Doe" value="">
 						</div>

 						<div class="form-group mb-4">
 							<label>Your Email Address</label>
 							<input name="email" type="email" class="form-control" placeholder="name@example.com" value="">
 						</div>

 						<div class="form-group mb-4">
 							<label>Subject (optional)</label>
 							<input name="subject" type="text" class="form-control" placeholder="Contact Subject">
 						</div>

 						<div class="form-group mb-4">
 							<label>Your Message</label>
 							<textarea name="message" class="form-control" rows="3" maxlength="300"></textarea>
 						</div>

 						<button type="submit" class="btn btn-primary btn-lg">Submit Form</button>

 						[lc_form action="lc_submit_contact_form"]
 					</form>
 				</div>
 			</div>
 		</div>
 		<div class="lc-block text-center text-md-start"><a class="text-decoration-none " href="#discover">
 				<div class="d-inline-flex align-items-baseline">
 					<div>
 						<svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" fill="currentColor" class="bg-white p-2 rounded-circle" viewBox="0 0 16 16" style="" lc-helper="svg-icon">
 							<path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"></path>
 						</svg>
 					</div>

 					<div class="ms-3 text-white" editable="rich">
 						<p>or discover more.</p>
 					</div>
 				</div>
 			</a></div><!-- /lc-block -->
 	</div>
 </section>
 <section id="discover">
 	<div class="container">
 		<div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
 			<div class="col">
 				<div class="lc-block card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" lc-helper="background" style="background-image: url('https://images.unsplash.com/photo-1560472354-0088b5dc9d8d?crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8Mnx8d29yZHByZXNzfGVufDB8MHx8fDE2NDYzMjk2OTA&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1080&amp;h=768&amp;faceindex=1&amp;duotone=172E72,28E398'); background-size:cover">
 					<div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
 						<div class="lc-block pt-5 mt-5 mb-4">
 							<div editable="rich">
 								<h2 class="display-6 lh-1 fw-bold">Short title, long jacket</h2>
 								<p>Quickly design and customize responsive mobile-first sites with Bootstrap.</p>
 							</div>
 						</div>
 						<ul class="lc-block d-flex list-unstyled mt-auto ms-auto"><a class="btn btn-link btn-sm text-white " href="#" role="button">Read more</a></ul>
 					</div>
 				</div>
 			</div>

 			<div class="col">
 				<div class="lc-block card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" lc-helper="background" style="background:url(https://images.unsplash.com/photo-1555952494-efd681c7e3f9?crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8NHx8Ym9vdHN0cmFwfGVufDB8MHx8fDE2NDYzMjk4NDE&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1080&amp;h=768&amp;duotone=172E72,28E398)  center / cover no-repeat;">
 					<div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
 						<div class="lc-block pt-5 mt-5 mb-4">
 							<div editable="rich">
 								<h2 class="display-6 lh-1 fw-bold">Much longer title that wraps to multiple lines</h2>
 								<p>Quickly design and customize responsive mobile-first sites with Bootstrap.</p>
 							</div>
 						</div>
 						<ul class="lc-block d-flex list-unstyled mt-auto ms-auto"><a class="btn btn-link btn-sm text-white " href="#" role="button">Read more</a></ul>
 					</div>
 				</div>
 			</div>

 			<div class="col">
 				<div class="lc-block card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" lc-helper="background" style="background:url(https://images.unsplash.com/photo-1591439657848-9f4b9ce436b9?crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8MXx8cGh5dG9ufGVufDB8MHx8fDE2NDYzMjk5MDc&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1080&amp;h=768&amp;duotone=172E72,28E398 )  center / cover no-repeat;">
 					<div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
 						<div class="lc-block pt-5 mt-5 mb-4">
 							<div editable="rich">
 								<h2 class="display-6 lh-1 fw-bold">Another longer title belongs here</h2>
 								<p>Quickly design and customize responsive mobile-first sites with Bootstrap.</p>
 							</div>
 						</div>
 						<ul class="lc-block d-flex list-unstyled mt-auto ms-auto"><a class="btn btn-link btn-sm text-white " href="#" role="button">Read more</a></ul>
 					</div>
 				</div>
 			</div>
 		</div>
 	</div>
 </section>
 <section>
 	<div class="container overflow-hidden py-7">
 		<div class="row align-items-center justify-content-center my-5">
 			<div class="col-8 col-lg-3 order-lg-2 offset-lg-1 mb-4 mb-lg-0 ">
 				<div class="lc-block">
 					<img style="transform:scale(1.2)" class="img-fluid py-4 wp-image-1949" src="https://library.livecanvas.com/starters/wp-content/uploads/sites/15/2022/03/undraw_pay_online_re_aqe6.svg" srcset="" sizes="" width="" height="562" alt="">
 				</div><!-- /lc-block -->
 			</div><!-- /col -->
 			<div class="col-12 col-lg-2 order-lg-1 position-relative py-lg-5 my-4 ">
 				<div class="lc-block col-3 col-lg-12 mx-auto bg-light rounded-circle d-flex justify-content-center align-items-center shadow" style="aspect-ratio:1/1;">

 					<h2 editable="inline" class="h1"><strong>1</strong></h2>

 				</div><!-- /lc-block -->
 				<div class="d-none d-lg-block lc-block d-flex justify-content-center align-items-center position-absolute start-50 h-100 border-end" style="">
 				</div><!-- /lc-block -->
 			</div><!-- /col -->
 			<div class="col-12 col-lg-5 order-lg-3 offset-lg-1 text-center text-lg-start">
 				<div class="lc-block mb-4">
 					<div editable="rich">
 						<h2>Nunc et metus id ligula malesuada placerat sit amet quis enim.</h2>
 					</div>
 				</div>
 				<div class="lc-block">
 					<div editable="rich">

 						<p class="text-muted lead">Nulla faucibus mauris pellentesque blandit faucibus non. Sit ut et at suspendisse gravida hendrerit scelerisque tempus placerat.</p>
 					</div>
 				</div><!-- /lc-block -->
 			</div><!-- /col -->
 		</div>
 		<div class="row align-items-center justify-content-center my-5">
 			<div class="col-8  col-lg-3 order-lg-2 offset-lg-1 mb-4 mb-lg-0 ">
 				<div class="lc-block">
 					<img style="transform:scale(1.2)" class="img-fluid py-4 wp-image-1948" src="https://library.livecanvas.com/starters/wp-content/uploads/sites/15/2022/03/undraw_static_website_re_x70h.svg" srcset="" sizes="" width="" height="528" alt="">
 				</div><!-- /lc-block -->
 			</div><!-- /col -->
 			<div class="col-12 col-lg-2 order-lg-1 position-relative py-lg-5 my-4 ">
 				<div class="lc-block col-3 col-lg-12 mx-auto bg-light rounded-circle d-flex justify-content-center align-items-center shadow" style="aspect-ratio:1/1;">

 					<h2 editable="inline" class="h1"><b>2</b></h2>

 				</div><!-- /lc-block -->
 				<div class="d-none d-lg-block lc-block d-flex justify-content-center align-items-center position-absolute start-50 h-100 border-end" style="">
 				</div><!-- /lc-block -->
 			</div><!-- /col -->
 			<div class="col-12 col-lg-5 order-lg-3 offset-lg-1 text-center text-lg-start">
 				<div class="lc-block mb-4">
 					<div editable="rich">
 						<h2>Gravida hendrerit scelerisque</h2>
 					</div>
 				</div>
 				<div class="lc-block">
 					<div editable="rich">

 						<p class="text-muted lead">Nulla faucibus mauris pellentesque blandit faucibus non. Sit ut et at suspendisse gravida hendrerit scelerisque tempus placerat.</p>
 					</div>
 				</div><!-- /lc-block -->
 			</div><!-- /col -->
 		</div>
 		<div class="row align-items-center justify-content-center my-5">
 			<div class="col-8  col-lg-3 order-lg-2 offset-lg-1 mb-4 mb-lg-0 ">
 				<div class="lc-block">
 					<img style="transform:scale(1.2)" class="img-fluid py-4 wp-image-1958" src="https://library.livecanvas.com/starters/wp-content/uploads/sites/15/2022/03/undraw_complete_design_re_h75h.svg" srcset="" sizes="" width="" height="576" alt="">
 				</div><!-- /lc-block -->
 			</div><!-- /col -->
 			<div class="col-12 col-lg-2 order-lg-1 position-relative py-lg-5 my-4 ">
 				<div class="lc-block col-3 col-lg-12 mx-auto bg-light rounded-circle d-flex justify-content-center align-items-center shadow" style="aspect-ratio:1/1;">

 					<h2 editable="inline" class="h1"><b>3</b></h2>

 				</div><!-- /lc-block -->
 				<div class="d-none d-lg-block lc-block d-flex justify-content-center align-items-center position-absolute start-50 h-100 border-end" style="">
 				</div><!-- /lc-block -->
 			</div><!-- /col -->
 			<div class="col-12 col-lg-5 order-lg-3 offset-lg-1 text-center text-lg-start">
 				<div class="lc-block mb-4">
 					<div editable="rich">
 						<h2>Magna ullamcorper potenti elementum</h2>
 					</div>
 				</div>
 				<div class="lc-block">
 					<div editable="rich">

 						<p class="text-muted lead">Nulla faucibus mauris pellentesque blandit faucibus non. Sit ut et at suspendisse gravida hendrerit scelerisque tempus placerat.</p>
 					</div>
 				</div><!-- /lc-block -->
 			</div><!-- /col -->
 		</div>
 		<div class="row align-items-center justify-content-center my-5">
 			<div class="col-8  col-lg-3 order-lg-2 offset-lg-1 mb-4 mb-lg-0 ">
 				<div class="lc-block">
 					<img style="transform:scale(1.2)" class="img-fluid py-4 wp-image-1961" src="https://library.livecanvas.com/starters/wp-content/uploads/sites/15/2022/03/undraw_people_re_8spw.svg" srcset="" sizes="" width="" height="638" alt="">
 				</div><!-- /lc-block -->
 			</div><!-- /col -->
 			<div class="col-12 col-lg-2 order-lg-1 position-relative py-lg-5 my-4 ">
 				<div class="lc-block col-3 col-lg-12 mx-auto bg-light rounded-circle d-flex justify-content-center align-items-center shadow" style="aspect-ratio:1/1;">

 					<h2 editable="inline" class="h1"><b>4</b></h2>

 				</div><!-- /lc-block -->
 				<div class="d-none  lc-block d-flex justify-content-center align-items-center position-absolute start-50 h-100 border-end" style="">
 				</div><!-- /lc-block -->
 			</div><!-- /col -->
 			<div class="col-12 col-lg-5 order-lg-3 offset-lg-1 text-center text-lg-start">
 				<div class="lc-block mb-4">
 					<div editable="rich">
 						<h2>Duis euismod enim</h2>
 					</div>
 				</div>
 				<div class="lc-block">
 					<div editable="rich">

 						<p class="text-muted lead">Nulla faucibus mauris pellentesque blandit faucibus non. Sit ut et at suspendisse gravida hendrerit scelerisque tempus placerat.</p>
 					</div>
 				</div><!-- /lc-block -->
 			</div><!-- /col -->
 		</div>
 	</div>
 </section>
 <section class="bg-light">
 	<div class="container py-6">
 		<div class="row mb-5">
 			<div class="col-md-12">
 				<div class="lc-block text-center">
 					<div editable="rich">
 						<h2 class="display-5 fw-bold">Alumni Services</h2>
 					</div>
 				</div><!-- /lc-block -->
 			</div>
 		</div>
 		<div class="row mb-3 text-center row-cols-1 row-cols-sm-3">
 			<div class="col mb-3">
 				<div class="card border-0">
 					<div class="card-body">
 						<div class="lc-block mb-5">

 							<svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" fill="currentColor" class="bg-light rounded p-3 text-success" viewBox="0 0 16 16" lc-helper="svg-icon">
 								<path d="m7.792.312-1.533 2.3A.25.25 0 0 0 6.467 3H7.5v7.319a2.5 2.5 0 0 0-.515-.298L5.909 9.56A1.5 1.5 0 0 1 5 8.18v-.266a1.5 1.5 0 1 0-1 0v.266a2.5 2.5 0 0 0 1.515 2.298l1.076.461a1.5 1.5 0 0 1 .888 1.129 2.001 2.001 0 1 0 1.021-.006v-.902a1.5 1.5 0 0 1 .756-1.303l1.484-.848A2.5 2.5 0 0 0 11.995 7h.755a.25.25 0 0 0 .25-.25v-2.5a.25.25 0 0 0-.25-.25h-2.5a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25h.741a1.5 1.5 0 0 1-.747 1.142L8.76 8.99a2.584 2.584 0 0 0-.26.17V3h1.033a.25.25 0 0 0 .208-.389L8.208.312a.25.25 0 0 0-.416 0Z"></path>
 							</svg>

 						</div>
 						<div class="lc-block mb-3">
 							<div editable="rich">

 								<h2 class="h4">Sit facilisis dolor arcu</h2>


 							</div>
 						</div>
 						<div class="lc-block mb-5">
 							<div editable="rich">
 								<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et metus id ligula malesuada placerat sit amet quis enim.</p>
 							</div>
 						</div><!-- /lc-block -->
 					</div>
 				</div>
 			</div><!-- /col -->
 			<div class="col mb-3">
 				<div class="card border-0 ">
 					<div class="card-body">
 						<div class="lc-block mb-5">

 							<svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" fill="currentColor" class="bg-light rounded p-3 text-success" viewBox="0 0 16 16" lc-helper="svg-icon">
 								<path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z"></path>
 							</svg>

 						</div>
 						<div class="lc-block mb-3">
 							<div editable="rich">

 								<h2 class="h4">Sit facilisis dolor arcu</h2>


 							</div>
 						</div>
 						<div class="lc-block mb-5">
 							<div editable="rich">

 								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et metus id ligula malesuada placerat sit amet quis enim.</p>
 							</div>
 						</div><!-- /lc-block -->
 					</div>
 				</div>
 			</div><!-- /col -->
 			<div class="col mb-3">
 				<div class="card border-0">
 					<div class="card-body">
 						<div class="lc-block mb-5">

 							<svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" fill="currentColor" class="bg-light rounded p-3 text-success" viewBox="0 0 16 16" lc-helper="svg-icon">
 								<path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434L7.752.066ZM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567L4.25 7.504ZM7.5 9.933l-2.75 1.571v3.134l2.75-1.571V9.933Zm1 3.134 2.75 1.571v-3.134L8.5 9.933v3.134Zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567-2.742 1.567Zm2.242-2.433V3.504L8.5 5.076V8.21l2.75-1.572ZM7.5 8.21V5.076L4.75 3.504v3.134L7.5 8.21ZM5.258 2.643 8 4.21l2.742-1.567L8 1.076 5.258 2.643ZM15 9.933l-2.75 1.571v3.134L15 13.067V9.933ZM3.75 14.638v-3.134L1 9.933v3.134l2.75 1.571Z"></path>
 							</svg>

 						</div>
 						<div class="lc-block mb-3">
 							<div editable="rich">

 								<h2 class="h4">Sit facilisis dolor arcu</h2>


 							</div>
 						</div>
 						<div class="lc-block mb-5">
 							<div editable="rich">

 								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et metus id ligula malesuada placerat sit amet quis enim.</p>
 							</div>
 						</div><!-- /lc-block -->
 					</div>
 				</div>
 			</div><!-- /col -->
 		</div>
 		<div class="row">
 			<div class="col-md-12">
 				<div class="lc-block text-center">
 					<a class="btn btn-lg btn-outline-success" href="#" role="button" lc-helper="button">Enroll now</a>
 				</div><!-- /lc-block -->
 			</div><!-- /col -->
 		</div>
 	</div>
 </section>
 <section class="bg-light">
 	<div class="container py-6">
 		<div class="row ùgx-3 gx-lg-4">
 			<div class="col-md-5 mb-4 mb-md-0">
 				<div class="lc-block card border-0 text-white p-3 p-lg-4 h-100" style="background: linear-gradient(45deg, #172E72 0%, #28E398 50%, #28E398 100%) !important;">
 					<div class="card-body">
 						<div class="lc-block mb-4">
 							<div editable="rich">
 								<h1 class="fw-bold display-1">299k</h1>
 							</div>
 						</div>
 						<div class="lc-block">
 							<div editable="rich">
 								<p class="rfs-10"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et metus id ligula <strong>malesuada placerat</strong> sit amet quis enim aliquam.</p>
 							</div>
 						</div>
 					</div>
 				</div><!-- /lc-block -->
 			</div><!-- /col -->
 			<div class="col-md-7">
 				<div class="lc-block card border-0 bg-white shadow p-3 h-100">
 					<div class="card-body">
 						<div class="lc-block mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" fill="currentColor" viewBox="0 0 16 16" lc-helper="svg-icon" class="bg-dark text-white rounded p-2 shadow">
 								<path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"></path>
 							</svg></div>
 						<div class="lc-block mb-5">
 							<div editable="rich">
 								<p class="rfs-8"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et metus id ligula malesuada placerat sit amet quis enim. Aliquam erat volutpat. In pellentesque scelerisque auctor. Ut porta lacus eget nisi fermentum lobortis. Vestibulum facilisis tempor
 									ipsum, ut rhoncus magna ultricies.</p>
 							</div>
 						</div>
 						<div class="lc-block d-flex">
 							<div class="me-2">
 								<img src="https://images.unsplash.com/photo-1630310088085-c98a7c8d4c92?crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8NjB8fG1hbnxlbnwwfDJ8fHwxNjQ2MzQzOTg0&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1080&amp;h=1080" class="rounded-circle" alt="Photo by Kultbrecher" width="64" srcset="https://images.unsplash.com/photo-1630310088085-c98a7c8d4c92?crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8NjB8fG1hbnxlbnwwfDJ8fHwxNjQ2MzQzOTg0&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1080&amp;h=1080 1080w, https://images.unsplash.com/photo-1630310088085-c98a7c8d4c92??crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8NjB8fG1hbnxlbnwwfDJ8fHwxNjQ2MzQzOTg0&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=150 150w, https://images.unsplash.com/photo-1630310088085-c98a7c8d4c92??crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8NjB8fG1hbnxlbnwwfDJ8fHwxNjQ2MzQzOTg0&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=300 300w, https://images.unsplash.com/photo-1630310088085-c98a7c8d4c92??crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8NjB8fG1hbnxlbnwwfDJ8fHwxNjQ2MzQzOTg0&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=768 768w, https://images.unsplash.com/photo-1630310088085-c98a7c8d4c92??crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8NjB8fG1hbnxlbnwwfDJ8fHwxNjQ2MzQzOTg0&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1024 1024w" sizes="(max-width: 1080px) 100vw, 1080px" height="64">
 							</div>

 							<div editable="rich">

 								<h2 class="h5 fw-bold">Richard Fox</h2>
 								<p class="rfs-6">Head of Marketing at Company LLC</p>
 							</div>
 						</div>
 					</div>
 				</div><!-- /lc-block -->
 			</div><!-- /col -->
 		</div>
 	</div>
 </section>
 <section class="pt-5">
 	<div class="container py-5">
 		<div class="row mb-4">
 			<div class="lc-block text-center">
 				<div editable="rich">
 					<h2 class="fw-bold display-4">Brands and partners</h2>
 				</div>
 			</div>
 			<div class="lc-block text-center">
 				<div editable="rich">
 					<p class="lead">Sponsoring and Empowering us</p>
 				</div>
 			</div>
 		</div>
 		<div class="row row-cols-3 justify-content-center row-cols-lg-6 gap-lg-0">
 			<div class="col my-5 text-center">
 				<div class="lc-block">
 					<img class="img-fluid" src="https://cdn.livecanvas.com/media/logos/ipsum/logoipsum-logo-1.svg" width="128" height="">
 				</div>
 				<!-- /lc-block -->
 			</div>
 			<div class="col my-5 text-center">
 				<div class="lc-block">
 					<img class="img-fluid" src="https://cdn.livecanvas.com/media/logos/ipsum/logoipsum-logo-2.svg" width="128" height="">
 				</div>
 				<!-- /lc-block -->
 			</div>
 			<div class="col my-5 text-center">
 				<div class="lc-block">
 					<img class="img-fluid" src="https://cdn.livecanvas.com/media/logos/ipsum/logoipsum-logo-3.svg" width="128" height="">
 				</div>
 				<!-- /lc-block -->
 			</div>
 			<div class="col my-5 text-center">
 				<div class="lc-block">
 					<img class="img-fluid" src="https://cdn.livecanvas.com/media/logos/ipsum/logoipsum-logo-6.svg" width="128" height="">
 				</div>
 				<!-- /lc-block -->
 			</div>
 			<div class="col my-5 text-center">
 				<div class="lc-block">
 					<img class="img-fluid" src="https://cdn.livecanvas.com/media/logos/ipsum/logoipsum-logo-8.svg" width="128" height="">
 				</div>
 				<!-- /lc-block -->
 			</div>
 			<div class="col my-5 text-center">
 				<div class="lc-block">
 					<img class="img-fluid" src="https://cdn.livecanvas.com/media/logos/ipsum/logoipsum-logo-10.svg" width="128" height="">
 				</div>
 				<!-- /lc-block -->
 			</div>
 		</div>
 	</div>
 </section>
 <section class="pb-6">
 	<div class="container pt-5 my-4 rounded">

 		<div class="row justify-content-center text-center mb-4">

 			<div class="lc-block col-xl-8">
 				<h1 editable="inline" class="fw-bold display-5">FAQ</h1>
 			</div><!-- /lc-block -->

 		</div>
 		<div class="row justify-content-center text-center mb-4">

 			<div class="lc-block col-xl-8">
 				<div editable="rich">
 					<p class="text-muted rfs-8"> Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
 				</div>
 			</div><!-- /lc-block -->

 		</div>

 		<div class="row justify-content-center">
 			<div class="col-md-12 col-xxl-8">
 				<div class="lc-block">
 					<div class="accordion accordion-flush" id="accordionFlushMyFAQ2">
 						<div class="lc-block accordion-item mb-5 p-md-4 card card-body shadow">

 							<a editable="inline" class="fw-bold text-decoration-none text-dark h4 collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
 								Nunc duis id aenean gravida tincidunt eu
 							</a>

 							<div id="flush-collapseOne" class="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushMyFAQ2">
 								<div class="accordion-body" editable="rich">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.<p><br></p>
 									<p><a href="#">Learn More</a><br></p>
 								</div>
 							</div>
 						</div>
 						<div class="lc-block accordion-item mb-5 p-md-4 card card-body shadow"><a editable="inline" class="fw-bold text-decoration-none text-dark h4" href="#" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
 								Viverra aliquam arcu
 							</a>

 							<div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushMyFAQ2">
 								<div class="accordion-body" editable="rich">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
 							</div>
 						</div>
 						<div class="lc-block accordion-item mb-5 p-md-4 card card-body shadow"><a editable="inline" class="fw-bold text-decoration-none text-dark h4 collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
 								Vehicula eu etiam quam tristique
 							</a>

 							<div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushMyFAQ2">
 								<div class="accordion-body" editable="rich">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
 							</div>
 						</div>
 						<div class="lc-block accordion-item mb-5 p-md-4 card card-body shadow"><a editable="inline" class="fw-bold text-decoration-none text-dark h4" href="#" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">&nbsp; Tristique tincidunt suspendisse ut consequat</a>

 							<div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushMyFAQ2">
 								<div class="accordion-body" editable="rich">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
 							</div>
 						</div>
 						<div class="lc-block accordion-item mb-5 p-md-4 card card-body shadow">

 							<a editable="inline" class="fw-bold text-decoration-none text-dark h4 collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
 								Aliquet pretium cursus adipiscing gravida</a>

 							<div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushMyFAQ2">
 								<div class="accordion-body" editable="rich">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
 							</div>
 						</div>
 					</div>
 				</div>
 				<!-- /col -->
 				<!-- /lc-block -->
 			</div><!-- /col -->
 		</div>
 	</div>
 </section>
 <section style="background:url(#)  center / cover no-repeat;">
 	<div class="d-flex text-center" lc-helper="background" style="min-height: 20vh; background-attachment: fixed; background-size:cover; background-position: center center;background-color:#eee;background-image: url(https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8MjB8fGxlYXJufGVufDB8MHx8fDE2NDYzNDQ2MTY&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1080&amp;duotone=172E72,28E398);">
 		<div class="lc-block  my-3 align-self-center w-100 py-5">
 			<div editable="rich">
 				<h2 class="display-4">This could be your call to action</h2>
 				<p>Lorem int ipsum dolor sit amet when an unknown printer took a galley of type. Vivamus id tempor.</p>
 			</div>
 			<a class="btn btn-success" href="#" role="button">Click me, I'm a button</a>
 		</div>
 	</div>
 </section>`],
      },
      {
        key: '1-2',
        label: 'about',
        code: [`<section class="hero d-flex align-items-center" style="padding: 150px 0; background: url('https://xianxia.fsjfsj.com/wp-content/uploads/2024/06/footer-banner.jpg') center/cover no-repeat; position: relative; overflow: hidden;">
	<div class="overlay" style="position: absolute; top:0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.7);"></div>
	<div class="container d-flex align-items-center position-relative" style="z-index: 2;">
		<div class="row w-100 align-items-center">
			<!-- Left Image with Overlay & Animation -->
			<div class="col-md-6 position-relative text-center">
				<div class="image-container position-relative">
					<img src="https://xianxia.fsjfsj.com/wp-content/uploads/2024/06/discussion.jpg" class="img-fluid rounded shadow-lg animate__animated animate__fadeInLeft" alt="Electronics Protection">
					<div class="overlay" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.3); border-radius: 10px;"></div>
				</div>
			</div>

			<!-- Right Content -->
			<div class="col-md-6 text-start text-white animate__animated animate__fadeInRight">
				<h1 class="fw-bold text-primary-25 text-start">
					2002 Founded, China First
				</h1>
				<h2 class="fw-bold text-success" style="font-size: 2.5rem;">7-DAY DELIVERY</h2>
				<h3 class="fw-bold" style="font-size: 2rem;">
					<span class="uael-fancy-stack">
						<span class="uael-fancy-heading uael-fancy-text-main uael-typed-main-wrap">
							<span id="typed-text" class="uael-typed-main"></span>
						</span>
					</span>
				</h3>
				<p style="font-size: 1.2rem;">All you need to do is submit the design of the headset to us, and our professional team and state-of-the-art machines can quickly proof it in seven days and send you a sample for free.</p>
				<div class="mt-4 d-flex">
					<button class="btn btn-success me-3 px-4 py-2 fw-bold" style="font-size: 1.2rem;" onclick="openQuoteModal()">GET A QUOTE</button>
					<a href="/products" class="btn btn-outline-light px-4 py-2 fw-bold" style="font-size: 1.2rem;">EXPLORE MORE</a>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
  .uael-typed-main {
      display: inline-block;
      opacity: 0;
      transition: opacity 0.5s ease-in-out;
  }

  .uael-typed-main.show {
      opacity: 1;
  }
</style>

<script>
document.addEventListener("DOMContentLoaded", function () {
    const typedText = document.getElementById("typed-text");
    const words = ["Electronics", "Audio Devices", "Charging Accessories"];
    let wordIndex = 0;

    function changeText() {
        typedText.classList.remove("show"); // 渐隐
        setTimeout(() => {
            typedText.textContent = words[wordIndex]; // 切换文本
            typedText.classList.add("show"); // 渐显
            wordIndex = (wordIndex + 1) % words.length;
        }, 500); // 等待淡出后切换单词
    }

    setInterval(changeText, 3000); // 每 3 秒更换单词
    changeText(); // 立即执行一次，防止初始空白
});
</script>


<script>
function openQuoteModal() {
    var quoteModal = new bootstrap.Modal(document.getElementById('quoteModal'));
    quoteModal.show();
}

function closeExitPopup() {
    var exitPopup = document.getElementById("exitPopup");
    var modalBackdrop = document.querySelector(".modal-backdrop");
    exitPopup.classList.remove("show");
    document.body.classList.remove("modal-open");
    if (modalBackdrop) modalBackdrop.remove();
}

let hasPopupShown = sessionStorage.getItem("exitPopupShown");
document.addEventListener("mouseleave", function(event) {
    if (event.clientY < 10 && !hasPopupShown) {
        hasPopupShown = true;
        sessionStorage.setItem("exitPopupShown", "true");
        var exitPopup = new bootstrap.Modal(document.getElementById('exitPopup'));
        exitPopup.show();
    }
});
</script>



<script>
function openQuoteModal() {
    var quoteModal = new bootstrap.Modal(document.getElementById('quoteModal'));
    quoteModal.show();
}

function closeExitPopup() {
    document.getElementById("exitPopup").classList.remove("show");
    document.body.classList.remove("modal-open");
    document.querySelector(".modal-backdrop").remove();
}

let hasPopupShown = sessionStorage.getItem("exitPopupShown");
document.addEventListener("mouseleave", function(event) {
    if (event.clientY < 10 && !hasPopupShown) {
        hasPopupShown = true;
        sessionStorage.setItem("exitPopupShown", "true");
        var exitPopup = new bootstrap.Modal(document.getElementById('exitPopup'));
        exitPopup.show();
    }
});
</script>


<script>
document.addEventListener("mouseleave", function(event) {
    if (event.clientY < 10) {
        var exitPopup = new bootstrap.Modal(document.getElementById('exitPopup'));
        exitPopup.show();
    }
});
</script>


<!-- Quote Modal -->
<div id="quoteModal" class="modal fade" tabindex="-1">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title">Request a Quote</h5>
				<button type="button" class="btn-close" data-bs-dismiss="modal"></button>
			</div>
			<div class="modal-body">
				<p>Fill in your details and our team will get back to you soon.</p>
				<input type="text" class="form-control mb-2" placeholder="Your Name">
				<input type="email" class="form-control mb-2" placeholder="Your Email">
				<textarea class="form-control mb-2" placeholder="Your Message"></textarea>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
				<button type="button" class="btn btn-success">Submit</button>
			</div>
		</div>
	</div>
</div>

<script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
<script>
document.addEventListener("DOMContentLoaded", function () {
    var options = {
        strings: ["Electronics", "Audio Devices", "Charging Accessories"],
        typeSpeed: 80,
        backSpeed: 50,
        loop: true
    };
    new Typed("#typed-text", options);
});

function openQuoteModal() {
    var quoteModal = new bootstrap.Modal(document.getElementById('quoteModal'));
    quoteModal.show();
}
</script>

<style>
.image-container {
    position: relative;
    display: inline-block;
    border-radius: 10px;
    overflow: hidden;
}
.image-container img {
    width: 100%;
    border-radius: 10px;
    transition: transform 0.5s ease;
}
.image-container:hover img {
    transform: scale(1.05);
}
</style>

<!-- Quote Modal -->
<div id="quoteModal" class="modal fade" tabindex="-1">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title">Request a Quote</h5>
				<button type="button" class="btn-close" data-bs-dismiss="modal"></button>
			</div>
			<div class="modal-body">
				<p>Fill in your details and our team will get back to you soon.</p>
				<input type="text" class="form-control mb-2" placeholder="Your Name">
				<input type="email" class="form-control mb-2" placeholder="Your Email">
				<textarea class="form-control mb-2" placeholder="Your Message"></textarea>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
				<button type="button" class="btn btn-success">Submit</button>
			</div>
		</div>
	</div>
</div>

<script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
<script>
document.addEventListener("DOMContentLoaded", function () {
    var options = {
        strings: ["Electronics", "Audio Devices", "Charging Accessories"],
        typeSpeed: 80,
        backSpeed: 50,
        loop: true
    };
    new Typed("#typed-text", options);
});

function openQuoteModal() {
    var quoteModal = new bootstrap.Modal(document.getElementById('quoteModal'));
    quoteModal.show();
}
</script>

<style>
.image-container {
    position: relative;
    display: inline-block;
    border-radius: 10px;
    overflow: hidden;
}
.image-container img {
    width: 100%;
    border-radius: 10px;
    transition: transform 0.5s ease;
}
.image-container:hover img {
    transform: scale(1.05);
}
</style>


<!-- Quote Modal -->
<div id="quoteModal" class="modal fade" tabindex="-1">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title">Request a Quote</h5>
				<button type="button" class="btn-close" data-bs-dismiss="modal"></button>
			</div>
			<div class="modal-body">
				<p>Fill in your details and our team will get back to you soon.</p>
				<input type="text" class="form-control mb-2" placeholder="Your Name">
				<input type="email" class="form-control mb-2" placeholder="Your Email">
				<textarea class="form-control mb-2" placeholder="Your Message"></textarea>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
				<button type="button" class="btn btn-success">Submit</button>
			</div>
		</div>
	</div>
</div>

<script>
function openQuoteModal() {
    var quoteModal = new bootstrap.Modal(document.getElementById('quoteModal'));
    quoteModal.show();
}
</script>

<!-- Why Choose Us -->
<section class="why-choose-us py-5">
	<div class="container px-5">
		<h2 class="text-center mb-4 animate__animated animate__fadeIn">
			<div editable="rich">
				<h1>Why Choose Us</h1>
			</div>
		</h2>
		<div class="row">
			<div class="col-md-3 mb-4">
				<div class="card h-100 shadow animate__animated animate__fadeInUp">
					<div class="card-body p-4 text-start">
						<h4 class="card-title">✅ Certified Quality</h4>
						<p class="card-text">All products meet CE/FCC certification.</p>
					</div>
				</div>
			</div>
			<div class="col-md-3 mb-4">
				<div class="card h-100 shadow animate__animated animate__fadeInUp animate__delay-1s">
					<div class="card-body p-4">
						<h4 class="card-title">🚀 Fast Global Shipping</h4>
						<p class="card-text">Reliable international logistics for quick delivery.</p>
					</div>
				</div>
			</div>
			<div class="col-md-3 mb-4">
				<div class="card h-100 shadow animate__animated animate__fadeInUp animate__delay-2s">
					<div class="card-body p-4">
						<h4 class="card-title">💰 Competitive Wholesale Prices</h4>
						<p class="card-text">Bulk purchasing discounts to reduce costs.</p>
					</div>
				</div>
			</div>
			<div class="col-md-3 mb-4">
				<div class="card h-100 shadow animate__animated animate__fadeInUp animate__delay-3s">
					<div class="card-body p-4">
						<h4 class="card-title">🔧 Customized Solutions</h4>
						<p class="card-text">OEM/ODM services available for tailored needs.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Featured Products -->
<section class="product-categories py-5">
	<div class="container px-5">
		<h2 class="text-center mb-4 animate__animated animate__fadeIn">Our Product Categories</h2>
		<div class="row">
			<div class="col-md-4 mb-5">
				<div class="card h-100 shadow animate__animated animate__fadeInUp">
					<img src="https://xianxia.fsjfsj.com/wp-content/uploads/2024/06/footer-banner.jpg" alt="Bluetooth Speakers" class="card-img-top">
					<div class="card-body p-4">
						<h3 class="card-title">Bluetooth Speakers</h3>
						<p class="card-text">High-fidelity sound for your business meetings and events.</p>
						<a href="/category/speakers" class="btn btn-outline-primary">View More</a>
					</div>
				</div>
			</div>
			<div class="col-md-4 mb-5">
				<div class="card h-100 shadow animate__animated animate__fadeInUp animate__delay-1s">
					<img src="https://xianxia.fsjfsj.com/wp-content/uploads/2024/06/footer-banner.jpg" alt="Headphones" class="card-img-top">
					<div class="card-body p-4">
						<h3 class="card-title">Headphones</h3>
						<p class="card-text">Ergonomic design with noise-cancellation for focused work and clear calls.</p>
						<a href="/category/headphones" class="btn btn-outline-primary">View More</a>
					</div>
				</div>
			</div>
			<div class="col-md-4 mb-5">
				<div class="card h-100 shadow animate__animated animate__fadeInUp animate__delay-2s">
					<img src="https://xianxia.fsjfsj.com/wp-content/uploads/2024/06/footer-banner.jpg" alt="Wireless Earbuds" class="card-img-top">
					<div class="card-body p-4">
						<h3 class="card-title">Wireless Earbuds</h3>
						<p class="card-text">Compact and portable, perfect for professionals on the go.</p>
						<a href="/category/earbuds" class="btn btn-outline-primary">View More</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Customer Testimonials -->
<!-- Before & After Comparison Section -->
<section class="before-after-section py-5">
	<div class="container">
		<div class="row align-items-center">
			<!-- Before & After Image Overlay -->
			<div class="col-md-6 position-relative text-center">
				<div class="before-after-container">
					<img src="https://xianxia.fsjfsj.com/wp-content/uploads/2025/03/2.-banner-hero.png" alt="Sketch" class="before-image">
					<img src="https://xianxia.fsjfsj.com/wp-content/uploads/2024/06/footer-banner.jpg" alt="Finished Product" class="after-image">
					<div class="slider-handle">
						<div class="slider-button"></div>
					</div>
				</div>
			</div>

			<!-- Description -->
			<div class="col-md-6 text-start">
				<h2 class="fw-bold">From Idea to Reality</h2>
				<p>Your ideas might start as sketches or rough concepts. We turn them into high-quality, real-world products.</p>
				<p>Our advanced manufacturing ensures precision and efficiency, making your vision a reality.</p>
				<a href="/design-process" class="btn px-4 py-2 fw-bold btn-primary">See Our Design Process</a>
			</div>
		</div>
	</div>
</section>

<style>
.before-after-container {
    position: relative;
    width: 100%;
    max-width: 500px; /* 确保不会过大 */
    min-height: 400px; /* 解决高度塌陷 */
    overflow: hidden;
    user-select: none;
}
.before-after-container img {
    position: absolute;
    width: 100%;
    height: 100%; /* 让图片填满容器 */
    object-fit: cover;
    top: 0;
    left: 0;
}
.before-image {
    z-index: 1;
}
.after-image {
    z-index: 2;
    clip-path: inset(50% 0 0 0); /* 先显示 50% */
    transition: clip-path 0.1s ease-out;
}
.slider-handle {
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 5px;
    background: white;
    cursor: ns-resize;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: top 0.1s ease-out;
}
.slider-button {
    width: 20px;
    height: 20px;
    background: white;
    border: 2px solid black;
    border-radius: 50%;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}
</style>

<script>
document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".before-after-container");
    const afterImage = document.querySelector(".after-image");
    const sliderHandle = document.querySelector(".slider-handle");

    function moveSlider(clientY) {
        let rect = container.getBoundingClientRect();
        let offsetY = clientY - rect.top;
        let percentage = Math.max(0, Math.min(100, (offsetY / rect.height) * 100));
        afterImage.style.clipPath = \`inset(\${percentage}% 0 0 0)\`;
        sliderHandle.style.top = \`\${percentage}%\`;
    }

    // 鼠标移动时自动滑动
    container.addEventListener("mousemove", function(event) {
        moveSlider(event.clientY);
    });

    // 兼容触摸操作
    container.addEventListener("touchmove", function(event) {
        moveSlider(event.touches[0].clientY);
    }, { passive: true });
});
</script>


<!-- Contact Section -->
<!-- Hero Section -->


<!-- Contact & FAQ Section -->

<!-- Contact & FAQ Section -->


<!-- Bootstrap JS -->


<!-- Bootstrap JS -->
<section>
	<div class="container py-6">
		<div class="row mb-5 text-center text-xl-start">
			<div class="col-md-12">
				<div class="lc-block">
					<div editable="rich">

						<h2>Dozen of world's leading companies trust us</h2>


					</div>
				</div><!-- /lc-block -->
			</div><!-- /col -->
		</div>
		<div class="row row-cols-2 row-cols-sm-3 row-cols-xl-6 text-center text-xl-start align-items-center g-4 g-md-0">
			<div class="col py-3">
				<div class="lc-block">
					<img class="img-fluid" src="https://cdn.livecanvas.com/media/logos/world-logo/samsung.svg" width="128" height="128" loading="lazy">
				</div><!-- /lc-block -->
			</div>
			<div class="col py-3">
				<div class="lc-block">
					<img class="img-fluid" src="https://cdn.livecanvas.com/media/logos/world-logo/mailchimp.svg" width="128" height="128" loading="lazy">
				</div>
			</div>
			<div class="col py-3">
				<div class="lc-block">
					<img class="img-fluid" src="https://cdn.livecanvas.com/media/logos/world-logo/google.svg" width="128" height="128" loading="lazy">
				</div>
			</div>
			<div class="col py-3">
				<div class="lc-block">
					<img class="img-fluid" src="https://cdn.livecanvas.com/media/logos/world-logo/netflix.svg" width="128" height="128" loading="lazy">
				</div>
			</div>
			<div class="col py-3">
				<div class="lc-block">
					<img class="img-fluid" src="https://cdn.livecanvas.com/media/logos/world-logo/cocacola.svg" width="128" height="128" loading="lazy">
				</div>
			</div>
			<div class="col py-3">
				<div class="lc-block">
					<img class="img-fluid" src="https://cdn.livecanvas.com/media/logos/world-logo/adobe.svg" width="128" height="128" loading="lazy">
				</div>
			</div>
		</div>
	</div>
</section>


<section>
	<div class="container py-8">
		<div class="card bg-light lc-block">
			<div class="card-body p-md-4 py-xxl-6 position-relative">

				<img class="position-absolute d-none d-lg-block img-fluid position-absolute bottom-0 ms-xl-7" src="https://cdn.livecanvas.com/media/no_bg/woman_6.png" srcset="" sizes="" width="315" height="537" alt="Photo by Unsplash">

				<div class="row gx-md-0 gx-xl-7">
					<div class="col-lg-7 offset-lg-5 col-xl-6 text-center py-5 py-lg-4">
						<div class="lc-block d-flex gap-1 justify-content-center mb-4">
							<div class="lc-block">

								<svg width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" lc-helper="svg-icon" class="text-warning">
									<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
								</svg>

							</div>
							<div class="lc-block">

								<svg width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" lc-helper="svg-icon" class="text-warning">
									<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
								</svg>

							</div>
							<div class="lc-block">

								<svg width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" lc-helper="svg-icon" class="text-warning">
									<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
								</svg>

							</div>
							<div class="lc-block">

								<svg width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" lc-helper="svg-icon" class="text-warning">
									<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
								</svg>

							</div>
							<div class="lc-block">

								<svg width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" lc-helper="svg-icon" class="text-warning">
									<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
								</svg>

							</div>
						</div>
						<div class="lc-block mb-5 col-xl-10 mx-auto">
							<div editable="rich">
								<p class="text-muted rfs-9"> "Donec id elit non mi porta gravida at eget metus. Vivamus mollis est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Duis mollis porta est non commodo luctus."


								</p>
							</div>
						</div>
						<div class="lc-block">
							<div editable="rich">

								<h2 class="h5">Diane R. Barto</h2>

								<p class="text-muted lead">Sales engineer</p>

							</div>
						</div>
					</div><!-- /col -->
				</div>

			</div>

		</div>
	</div>
</section><!-- Testimonials Section -->


<!-- Include AOS CSS and JS -->




<!-- Bootstrap JS -->



<!-- Include AOS CSS and JS -->



<section id="contact" class="py-5 bg-dark text-white position-relative" style="padding: 120px 0; background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9));">
	<div class="container">
		<div class="row align-items-stretch">
			<!-- FAQ Section -->
			<div class="col-md-6 d-flex flex-column mb-4 mb-md-0">
				<h2 class="fw-bold mb-4 fade-in">Frequently Asked Questions</h2>
				<div class="accordion slide-up flex-grow-1" id="faqAccordion">
					<div class="accordion-item">
						<h2 class="accordion-header" id="faq1">
							<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
								What Bluetooth products do you offer?
							</button>
						</h2>
						<div id="collapse1" class="accordion-collapse collapse show" aria-labelledby="faq1" data-bs-parent="#faqAccordion">
							<div class="accordion-body">We offer headsets, speakers, IoT modules, and more for B2B solutions.</div>
						</div>
					</div>
					<div class="accordion-item">
						<h2 class="accordion-header" id="faq2">
							<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
								Do you provide bulk discounts?
							</button>
						</h2>
						<div id="collapse2" class="accordion-collapse collapse" aria-labelledby="faq2" data-bs-parent="#faqAccordion">
							<div class="accordion-body">Yes, we offer competitive wholesale pricing based on order quantity.</div>
						</div>
					</div>
					<div class="accordion-item">
						<h2 class="accordion-header" id="faq3">
							<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
								What is your shipping process?
							</button>
						</h2>
						<div id="collapse3" class="accordion-collapse collapse" aria-labelledby="faq3" data-bs-parent="#faqAccordion">
							<div class="accordion-body">We use trusted international carriers to ensure fast and secure delivery.</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Contact Form -->
			<div class="col-md-6 d-flex flex-column">
				<h2 class="fw-bold mb-4 fade-in">Get in Touch</h2>
				<p class="slide-up mb-4">We are here to help you with your Bluetooth solutions. Contact us now!</p>
				<div class="contact-form p-4 rounded flex-grow-1 d-flex flex-column justify-content-center" style="background: rgba(255, 255, 255, 0.1); box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);">
					<form action="https://api.form-data.com/f/NCjsGk0O7yzK4B" method="post" target="_blank" class="slide-up">
						<div class="mb-3 text-start">
							<label for="email" class="form-label fw-bold">Email</label>
							<input name="email" type="email" class="form-control" placeholder="Enter your email" required="">
						</div>
						<div class="mb-3 text-start">
							<label for="name" class="form-label fw-bold">Name</label>
							<input name="name" type="text" class="form-control" placeholder="Enter your name" required="">
						</div>
						<div class="mb-3 text-start">
							<label for="message" class="form-label fw-bold">Message</label>
							<textarea name="message" rows="4" class="form-control" placeholder="Your message here..." required=""></textarea>
						</div>
						<button type="submit" class="btn btn-primary btn-lg w-100">Submit</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</section><script>
  AOS.init({
    duration: 1000, // Animation duration
    once: true, // Whether animation should happen only once
  });
</script>`]
      }
    ]
  },
  {
    key: '2',
    label: '组件',
    children: [
      {
        key: '2-1',
        label: 'Header',
        code: [`<header class="container-fluid bg-black p-1">
	<div class="container d-flex align-items-center justify-content-between">
		<div class="d-flex align-items-center">
			<img src="https://xianxia.fsjfsj.com/wp-content/uploads/2024/06/logo.png" style="height: 35px; margin-right: 50px;" width="150" height="50" class="wp-image-203">
		</div>

		<script>
//lc-needs-hard-refresh
</script>
		<nav>
			<ul class="nav justify-content-around bg-black border-secondary p-2" style="margin: 0; padding: 10px 0;">
				<li class="nav-item">
					<a class="nav-link px-4 py-2 text-white" href="https://xianxia.fsjfsj.com">HOME</a>
				</li>

				<!-- About Dropdown -->
				<li class="nav-item dropdown position-relative">
					<a class="nav-link px-4 py-2 text-white" href="#" id="aboutDropdown" role="button">
						ABOUT
					</a>
					<ul class="dropdown-menu position-absolute bg-black border-0 shadow" aria-labelledby="aboutDropdown" style="display: none;">
						<li><a class="dropdown-item text-white" href="https://xianxia.fsjfsj.com/about">About Us</a></li>
						<li><a class="dropdown-item text-white" href="https://xianxia.fsjfsj.com/team">Team</a></li>
						<li><a class="dropdown-item text-white" href="https://xianxia.fsjfsj.com/factory">Factory</a></li>
					</ul>
				</li>

				<!-- Product Mega Menu -->
				<li class="nav-item dropdown position-relative">
					<a class="nav-link px-4 py-2 text-white" href="https://xianxia.fsjfsj.com/Product" id="productDropdown" role="button">
						PRODUCT
					</a>
					<div class="mega-menu position-absolute bg-white border-0 shadow p-4 text-center" style="display: none; width: 900px; left: 50%; transform: translateX(-50%); border-radius: 10px; z-index: 1100;">
						<h2 class="fw-bold text-dark mb-4">Most Popular Product Category</h2>
						<div class="row">
							<div class="col-md-4">
								<img src="https://xianxia.fsjfsj.com/wp-content/uploads/2024/06/discussion.jpg" class="img-fluid rounded" alt="Category 1">
								<h5 class="text-dark mt-3">Electronics</h5>
								<ul class="list-unstyled text-dark">
									<li><a class="text-dark" href="#">Vestibulum</a></li>
									<li><a class="text-dark" href="#">Wireless</a></li>
									<li><a class="text-dark" href="#">Waterproof</a></li>
								</ul>
							</div>
							<div class="col-md-4">
								<img src="https://xianxia.fsjfsj.com/wp-content/uploads/2024/06/discussion.jpg" class="img-fluid rounded" alt="Category 2">
								<h5 class="text-dark mt-3">Audio Devices</h5>
								<ul class="list-unstyled text-dark">
									<li><a class="text-dark" href="#">HiFi Music</a></li>
									<li><a class="text-dark" href="#">High Speed</a></li>
									<li><a class="text-dark" href="#">Speedrun</a></li>
								</ul>
							</div>
							<div class="col-md-4">
								<img src="https://xianxia.fsjfsj.com/wp-content/uploads/2024/06/discussion.jpg" class="img-fluid rounded" alt="Category 3">
								<h5 class="text-dark mt-3">Charging Accessories</h5>
								<ul class="list-unstyled text-dark">
									<li><a class="text-dark" href="#">Charging Log</a></li>
									<li><a class="text-dark" href="#">3rd Charger</a></li>
									<li><a class="text-dark" href="#">Magnet Line</a></li>
								</ul>
							</div>
						</div>
						<a href="#" class="btn btn-success mt-4">Explore All Products</a>
					</div>
				</li>

				<li class="nav-item">
					<a class="nav-link px-4 py-2 text-white" href="https://xianxia.fsjfsj.com/blog">BLOG</a>
				</li>
				<li class="nav-item">
					<a class="nav-link px-4 py-2 text-white" href="https://xianxia.fsjfsj.com/Contact">CONTACT</a>
				</li>
			</ul>
		</nav>
	</div>
</header>

<!-- Bootstrap JS -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

<script>
document.addEventListener("DOMContentLoaded", function () {
    function setupDropdownHover(dropdownId, menuClass) {
        let dropdown = document.querySelector(dropdownId).parentElement;
        let dropdownMenu = dropdown.querySelector(menuClass);
        
        dropdown.addEventListener("mouseenter", function () {
            dropdownMenu.style.display = "block";
        });
        
        dropdown.addEventListener("mouseleave", function () {
            dropdownMenu.style.display = "none";
        });
    }
    
    setupDropdownHover("#aboutDropdown", ".dropdown-menu");
    setupDropdownHover("#productDropdown", ".mega-menu");
});
</script>

<style>
.dropdown-menu {
    background: #000;
    border: none;
    padding: 10px 0;
}
.dropdown-menu .dropdown-item {
    color: white;
    padding: 10px 20px;
    transition: background 0.3s ease;
}
.dropdown-menu .dropdown-item:hover,
.dropdown-menu .dropdown-item:focus {
    background: rgba(255, 255, 255, 0.2);
}
</style>

<!-- Bootstrap JS -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

<script>
document.addEventListener("DOMContentLoaded", function () {
    function setupDropdownHover(dropdownId, menuClass) {
        let dropdown = document.querySelector(dropdownId).parentElement;
        let dropdownMenu = dropdown.querySelector(menuClass);
        
        dropdown.addEventListener("mouseenter", function () {
            dropdownMenu.style.display = "block";
        });
        
        dropdown.addEventListener("mouseleave", function () {
            dropdownMenu.style.display = "none";
        });
    }
    
    setupDropdownHover("#aboutDropdown", ".dropdown-menu");
    setupDropdownHover("#productDropdown", ".mega-menu");
});
</script>

<style>
.mega-menu {
    padding: 30px;
    border-radius: 10px;
    text-align: center;
}
.mega-menu img {
    max-width: 100%;
    border-radius: 8px;
}
.mega-menu ul {
    padding: 0;
    margin-top: 10px;
}
.mega-menu ul li {
    padding: 5px 0;
}
.mega-menu ul li a:hover {
    text-decoration: underline;
}
.btn-success {
    background-color: #28a745;
    border-color: #28a745;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 5px;
}
.btn-success:hover {
    background-color: #218838;
    border-color: #1e7e34;
}
</style>


<style>
/* 默认链接颜色 */
.nav .nav-link {
    color: white !important;
    transition: background-color 0.3s, color 0.3s;
}

/* 悬停状态（鼠标经过时） */
.nav .nav-link:hover {
    background-color: #38733d !important; /* 绿色背景 */
    color: white !important; /* 白色文字 */
    border-radius: 5px;
}

/* 选中（active）状态：黑底绿字 */
.nav .nav-link.active {
    background-color: black !important; 
    color: #38733d !important; /* 绿色文字 */
    font-weight: bold;
    border-radius: 5px;
}
</style>

<script>
document.addEventListener("DOMContentLoaded", function () {
    let currentUrl = window.location.href.split('?')[0].toLowerCase(); // 去掉参数并忽略大小写

    document.querySelectorAll(".nav-link").forEach(link => {
        let linkUrl = link.href.split('?')[0].toLowerCase(); // 同样去掉参数并忽略大小写
        
        if (currentUrl === linkUrl || currentUrl.endsWith('/') && currentUrl.slice(0, -1) === linkUrl) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});
</script>


<style>
/* 导航栏默认样式 */
.nav .nav-link {
    color: white;
    transition: 0.3s;
}

/* 悬停状态 */
.nav .nav-link:hover {
    background-color: #38733d; /* 绿色 */
    color: white;
    border-radius: 5px;
}

/* 选中（active）状态：黑底绿字 */
.nav .nav-link.active {
    background-color: black !important; 
    color: #38733d !important; /* 绿色文字 */
    font-weight: bold;
    border-radius: 5px;
}
</style>

<script>
document.addEventListener("DOMContentLoaded", function () {
    // 获取当前页面 URL
    let currentUrl = window.location.href;
    
    // 遍历导航链接
    document.querySelectorAll(".nav-link").forEach(link => {
        if (link.href === currentUrl) {
            link.classList.add("active");
        }
    });
});
</script>
<section>
	<div class="container">
		<div class="row">
			<div class="col-md-6">
				<div class="lc-block">

				</div>
			</div>
			<div class="col-md-6"></div>
		</div>
	</div>
</section>`],
      },
      {
        key: '2-2',
        label: 'Banner',
        code: [`<section class="hero text-center py-5 position-relative" style="background-image: url('https://xianxia.fsjfsj.com/wp-content/uploads/2024/06/footer-banner.jpg'); background-size: cover; background-position: center; padding: 200px 0; overflow: hidden;">
        <div class="container py-7 position-relative" style="z-index: 2;">
                <h1 class="display-4 fw-bolder text-white animate__animated animate__fadeInDown">Empower Your Business with Our Bluetooth Solutions</h1>
                <p class="lead text-white animate__animated animate__fadeInUp animate__delay-1s">Explore our range of high-quality Bluetooth products designed for enterprise needs.</p>
                <a href="/products" class="btn btn-primary btn-lg animate__animated animate__zoomIn animate__delay-2s">Explore Products</a>
        </div>
        <div class="overlay" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5);"></div>
</section>`, 
`<section>
<div class="overlay" style="position: absolute; top:0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.7);"></div>
        <div class="container d-flex align-items-center position-relative" style="z-index: 2;">
                <div class="row w-100 align-items-center">
                        <!-- Left Image with Overlay & Animation -->
                        <div class="col-md-6 position-relative text-center">
                                <div class="image-container position-relative">
                                        <img src="https://xianxia.fsjfsj.com/wp-content/uploads/2024/06/footer-banner.jpg" class="img-fluid rounded shadow-lg animate__animated animate__fadeInLeft" alt="Electronics Protection">
                                        <div class="overlay" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.3); border-radius: 10px;"></div>
                                </div>
                        </div>

                        <!-- Right Content -->
                        <div class="col-md-6 text-start text-white animate__animated animate__fadeInRight">
                                <h1 class="fw-bold text-primary-25 text-start">
                                        2002 Founded, China First
                                </h1>
                                <h2 class="fw-bold text-success" style="font-size: 2.5rem;">7-DAY DELIVERY</h2>
                                <h3 class="fw-bold" style="font-size: 2rem;">
                                        <span class="uael-fancy-stack">
                                                <span class="uael-fancy-heading uael-fancy-text-main uael-typed-main-wrap">
                                                        <span id="typed-text" class="uael-typed-main"></span>
                                                </span>
                                        </span>
                                </h3>
                                <p style="font-size: 1.2rem;">All you need to do is submit the design of the headset to us, and our professional team and state-of-the-art machines can quickly proof it in seven days and send you a sample for free.</p>
                                <div class="mt-4 d-flex">
                                        <button class="btn btn-success me-3 px-4 py-2 fw-bold" style="font-size: 1.2rem;" onclick="openQuoteModal()">GET A QUOTE</button>
                                        <a href="/products" class="btn btn-outline-light px-4 py-2 fw-bold" style="font-size: 1.2rem;">EXPLORE MORE</a>
                                </div>
                        </div>
                </div>
        </div>
        </section>`],
      },
    ]
  }
]