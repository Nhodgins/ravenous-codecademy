const apiKey =
'FLcqa-l8RaOX5kCdEH4dfhgi-elVmeJ5jqXJdSN4oQ7XeNddXqvmg6fZtCewWikRwGm-Q5YRLnWZ5ZLgknDXp9BVM1SvdbqpScmKIpyofd2_-ECO8GgqfG2FxbbXW3Yx';

const Yelp = {
  search(term, location, sortBy){
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
    headers: {
      Authorization: `Bearer ${apiKey}`
    }
  }).then (response => {
      return response.json();
  }).then(jsonResponse => {
    if(jsonResponse.businesses) {
      return jsonResponse.businesses.map(business => ({
        id: business.id,
        imageSrc: business.imageSrc,
        name: business.name,
        address: business.address,
        city: business.city,
        state: business.state,
        zipCode: business.zipCode,
        category: business.category,
        rating: business.rating,
        reviewCount: business.reviewCount,
      }));
    }
  });
 }
};

export default Yelp;
