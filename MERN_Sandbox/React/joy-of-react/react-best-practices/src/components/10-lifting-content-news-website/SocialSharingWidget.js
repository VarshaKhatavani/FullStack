import React from 'react';
import { Facebook, Twitter, Share2 } from 'react-feather';

function SocialSharingWidget() {
  return (
    <div className="social-sharing-widget">
      <button>
        <Facebook />
      </button>
      <button>
        <Twitter />
      </button>
      <button>
        <Share2 />
      </button>
    </div>
  );
}

export default SocialSharingWidget;