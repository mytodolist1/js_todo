// export let formUpdate = `
// <form>
//     <div class="field">
//         <div class="control">
//             <input class="input is-medium is-rounded" id="#EMAIL#" />
//         </div>
//     </div>

//     <div class="field">
//         <div class="control">
//             <input class="input is-medium is-rounded" id="#USERNAME#" />
//         </div>
//     </div>

//     <button class="button is-block is-fullwidth is-success is-medium is-rounded" type="submit">
//         Confirm
//     </button>
// </form>
// `;

export let formProfile = `
<div class="border-t border-gray-200 px-4 py-5 sm:p-0">
    <dl class="sm:divide-y sm:divide-gray-200">
        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">
                Email address
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                #EMAIL#
            </dd>
        </div>
        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">
                Username
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                #USERNAME#
            </dd>
        </div>
    </dl>
</div>
`;