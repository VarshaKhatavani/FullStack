import React from 'react';

function ModuleLessons({ user }) {
  return (
    <>
      User email: {user?.email || 'Not provided'}
    </>
  );
}

export default ModuleLessons;