# Tenner

### Made by Alex L
[Github Link](https://github.com/Luckyleck)

## [Link here](tennner.onrender.com)



## Introduction

Tenner is meant to be a clone of the freelance website Fiverr. In its current implementation it is a bit light-weight but it does incoporate and display the same functionality that fiverr has. A user is able to browse through freelance services known as 'gigs' and upon clicking one, is presented with a view page and an option to purchase the gig. On each gig a user is able to leave a review. Typically this done after actually purchasing the 'gig'. This clone has the same sign-in and login-ui that Fiverr has as of 04/06/23 and incoporates all functionalities of 'user authentication'. 

Fiverr is a wonderful site that bridges the gap between the general public and freelancers. Buying a service on fiverr is very streamlined and a customer has a great sense of security knowing that the Fiverr company is acting as the middleman between the freelancer and the client. 

## Project Tools

Languages:

- Ruby, Javascript, HTML, CSS
  - Ruby on rails
  - Jbuilder
  
Frontend:
- React-Redux

Database:
- Postgresql

Hosting:
- Render.com

# MVPS

## User authentication

A user is able to sign up and login. In both of these options there is the appropriate error handling such as a field being left blank or incorrectly filled out. The error will display under the text field in red text. My application also uses CSRF protection to ensure the user and server's security.

<img src="/app/assets/images/Tenner/TennerSign-in.png" height=400 width=auto>  

```
const removeCurrentUser = () => {
    return {
        type: REMOVE_SESSION_USER,
    };
};

function storeCSRFToken(response) {
    const csrfToken = response.headers.get('X-CSRF-Token');
    if (csrfToken) {
        sessionStorage.setItem('X-CSRF-Token', csrfToken);
    }
}

function storeCurrentUser(user) {
    if (user) {
        sessionStorage.setItem('currentUser', JSON.stringify(user));
    } else {
        sessionStorage.removeItem('currentUser');
    }
}

export function login({ credential, password }) {
    return (async (dispatch) => {
        const res = await csrfFetch('/api/session', {
            method: 'POST',
            body: JSON.stringify({ credential, password })
        });
        
        const data = await res.json();
        storeCurrentUser(data.user)
        dispatch(setCurrentUser(data.user))
        return res;
    })
}
```  

## Gig Listing

The frontend dynamically pulls the gigs from the database and displays them in a nice 'gig-card' component. Upon clicking the title of the gig or of image, you will be redirected to the gigs show page. On fiverr the format of the title is "I will...". "I will" is required to be at the start, this allows for uniformity amongst sellers. 

<img src="/app/assets/images/Tenner/TennerGigsList.png" height=400 width=auto>

```
...
return (
        
        <div className="gig-card">

            <Link to={`/gigs/${gig.id}`}>
                <img id="gig-image" src={gig.image} />
            </Link>

            <div className="seller-info">
                <div className="seller-profile-bubble" style={{ backgroundColor: randomColor }}>
                    <h1>{gig.seller.username[0]}</h1>
                </div>
                <div className="seller-name">
                    <p>{gig.seller.username}</p>
                </div>
            </div>

            <Link to={`/gigs/${gig.id}`}>
                <div className="gig-title">
                    <p>I will be a {gig.title.toLowerCase()} for you</p>
                </div>
            </Link>

            <div className="base-price">
                <p>STARTING AT</p>
                <h2>${Math.floor(gig.base_price / 5) * 5}</h2>
            </div>

        </div>
    )
```

## Gig Showcase

This is the main display of a gig on Tenner. It contains all the information that a user could require before purchasing a gig. One important feature of this page is the reviews section. Typically a seller becomes successful once they get their first order and review. 

<img src="/app/assets/images/Tenner/TennerGigShowCase.png" height=400 width=auto>

## Gig Reviews

Each review is rendered underneath the gig's display page. The reviews for the gig are mapped and sent as prop to a component that formats and renders the review. A user is able to create a review of a gig and also able to delete or edit their reviews. Soon features wil include the star rating fuctionality the fiverr includes. 

<img src="/app/assets/images/Tenner/TennerGigReviews.png" height=400 width=auto>

```
...
return (
        <>
            <div className="review-container">
                <div className="reviewer-profile-bubble" style={{ backgroundColor: randomColor }}>
                    <h1>{review.reviewer.username[0]}</h1>
                </div>
                <div className="review-content">
                    <h3>{review.reviewer.username}</h3>
                    <p>{review.body}</p>
                    {review.reviewer.id === sessionUser.id && (
                        <div className="edit-delete-review">
                            <p id="edit-review-button" onClick={handleEditReview}>Edit Review</p>
                            <p id="delete-review-button" onClick={handleDeleteReview}>Delete Review</p>
                        </div>
                    )}
                </div>
            </div>
            {editReviewModal && <EditReview gig={gig} review={review} />}
            <hr id="review-showcase-hr" />
        </>
    )
```

## User Profile

The user profile is place to see information about the user. Currently the user profile is bare bones, but soon, displays will include the user's reviews as a seller and more information about the user like country, language, buyer status, etc. 

<img src="/app/assets/images/Tenner/TennerUserCardAndUpdate.png"  height=400 width=auto> 
<img src="/app/assets/images/Tenner/TennerOtherUserPage.png"  height=400 width=auto> 

```
import React from 'react';
import Navbar from '../Splash/Navbar';
import ProfileCard from '../ProfileCard';
import ReviewsCard from '../ReviewCard/ReviewCard';
import './UserDisplay.css';

function Profile() {
    return (
        <>
            <div className="main-wrapper">

                <div className="user-display-header">
                    <Navbar />
                </div>

                <div className="card-and-reviews">
                    <ProfileCard />
                    <ReviewsCard /> 
                </div>
            </div>
        </>
    )
}

export default Profile;
```



