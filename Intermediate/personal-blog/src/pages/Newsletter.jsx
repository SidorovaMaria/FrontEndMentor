import React, { useState } from "react";
import EmailForm from "../components/EmailForm";

const Newsletter = () => {
	const [errorMsg, setErroMsg] = useState("");

	return (
		<main className="px-[10px] pt-8 pb-6">
			<section className="flex flex-col gap-4">
				<h2 className="text-preset-3 text-neural-700 dark:text-neural-0">
					Newsletter
				</h2>
				<p className="text-neural-600 dark:text-neural-400 text-preset-7">
					Want to stay updated on my latest articles, coding
					tutorials, and personal adventures? Sign up for my
					newsletter! It’s a simple way to keep track of new posts and
					occasional coding tips I discover. Just drop your email in
					the sign-up box, and I’ll send you updates whenever there’s
					something new to share.
				</p>
				<p className="text-neural-700 dark:text-neural-0 text-preset-5">
					I’d love to have you along for the ride and also hear about
					your own journey!
				</p>
			</section>
			<EmailForm />
			<p className="text-preset-8 text-neural-600 dark:text-neural-400 ">
				Unsubscribe anytime. No spam, I promise 🙂
			</p>
		</main>
	);
};

export default Newsletter;
