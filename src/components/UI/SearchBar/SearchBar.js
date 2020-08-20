import React from 'react'

export default function SearchBar() {
    return (

        <div class="content">
            <div class="search">
                <input type="text" class="search__input" aria-label="search" placeholder="enter your search">
                    <button class="search__btn" aria-label="submit search"><i class="fas fa-search"></i></button>
  
                </div>
            </div>
        </div>
    )
}
