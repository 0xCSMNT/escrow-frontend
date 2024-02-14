"use client";

import React from "react";

export function CreateDeal() {
  return (
    <form>
      <h2>Create Deal</h2>
      <input
        name="counterparty address"
        placeholder="counterparty address"
        required
      />
      <br />
      <input
        name="party token address"
        placeholder="party token address"
        required
      />
      <br />
      <input
        name="party token amount"
        placeholder="party token amount"
        required
      />
      <br />
      <input
        name="counterparty token address"
        placeholder="counterparty token address"
        required
      />
      <br />
      <input
        name="counterparty token amount"
        placeholder="counterparty token amount"
        required
      />
      <br />
      <button type="submit">Create</button>
    </form>
  );
}
