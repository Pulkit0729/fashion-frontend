import React from 'react'
import Header from '../components/Header'
import StarIcon from '@material-ui/icons/Star';

function ProductScreen() {
	return (
		<div>
			<Header name="Rewari"></Header>
			<div class="ps">

				<div class="container-fliud">
					<div class="row">
						<div class="col-md-7">
							<div >
								<img src="http://placekitten.com/400/252" ></img>
								<img src="http://placekitten.com/200/126" />
								<img src="http://placekitten.com/200/126" />
								<img src="http://placekitten.com/200/126" />
								<img src="http://placekitten.com/200/126" />
								</div>

						</div>
						<div class="col-md-5 ps-description">
							<h3 class="product-title">Product Name</h3>
							
							<p class="product-subtitle">Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! .</p>
							<h4><span>Rs580</span></h4>
							<div class="rating">
									<StarIcon></StarIcon>
								
								<span class="review-no">41 reviews</span>
							</div>
							<h5 class="sizes">Sizes:</h5>
							<span class="size" data-toggle="tooltip" title="small">s</span>
							<span class="size" data-toggle="tooltip" title="medium">m</span>
							<span class="size" data-toggle="tooltip" title="large">l</span>
							<span class="size" data-toggle="tooltip" title="xtra large">xl</span>

							<div class="action">
								<button class="btn btn-primary" type="button">Add to favorite</button>
							</div>
							<div>
								Product Description
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductScreen